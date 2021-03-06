import reactRefresh from '@vitejs/plugin-react-refresh';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dfxJson from './dfx.json';

const isDev = process.env['DFX_NETWORK'] !== 'ic';

// @ts-ignore
const canisterIds = JSON.parse(fs.readFileSync(isDev ? '.dfx/local/canister_ids.json' : './canister_ids.json'));

// List of all aliases for canisters
// This will allow us to: import { canisterName } from "canisters/canisterName"
const aliases = Object.entries(dfxJson.canisters).reduce((acc, [name, _value]) => {
  // Get the network name, or `local` by default.
  const networkName = process.env['DFX_NETWORK'] || 'local';
  const outputRoot = path.join(__dirname, '.dfx', networkName, 'canisters', name);

  return {
    ...acc,
    ['canisters/' + name]: path.join(outputRoot, 'index' + '.js'),
  };
}, {});

// Generate canister ids, required by the generated canister code in .dfx/local/canisters/*
// This strange way of JSON.stringifying the value is required by vite
const canisterDefinitions = Object.entries(canisterIds).reduce(
  (acc, [key, val]) => ({
    ...acc,
    // @ts-ignore
    [`process.env.${key.toUpperCase()}_CANISTER_ID`]: isDev ? JSON.stringify(val.local) : JSON.stringify(val.ic),
  }),
  {}
);

// Gets the port dfx is running on from dfx.json
const DFX_PORT = dfxJson.networks.local.bind.split(':')[1];

// See guide on how to configure Vite at:
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  resolve: {
    alias: {
      // Here we tell Vite the "fake" modules that we want to define
      ...aliases,
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    fs: {
      allow: ['.'],
    },
    proxy: {
      // This proxies all http requests made to /api to our running dfx instance
      // '/api': {
      //   target: `http://localhost:${DFX_PORT}`,
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, '/api'),
      // },
      '/api/v2': {
        target: 'https://ic0.app',
        changeOrigin: true,
        rewrite: path => path.replace(/^api\//, '/api/v2/canister'),
      },
    },
  },
  define: {
    // Here we can define global constants
    // This is required for now because the code generated by dfx relies on process.env being set
    ...canisterDefinitions,
    'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
  },
});
