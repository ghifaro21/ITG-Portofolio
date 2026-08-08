const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const tmp = path.join(os.tmpdir(), 'caniuse-extract');
fs.mkdirSync(tmp, { recursive: true });

const tarball = 'caniuse-lite-1.0.30001809.tgz';
const tgzPath = require('path').resolve(process.cwd(), tarball);
execSync(`tar -xzf "${tgzPath}" -C "${tmp}"`, { cwd: tmp });

const srcBase = path.join(tmp, 'package', 'dist', 'unpacker');
const dstBase = path.join('node_modules', 'caniuse-lite', 'dist', 'unpacker');
fs.mkdirSync(dstBase, { recursive: true });

const files = fs.readdirSync(srcBase);
files.forEach(f => {
  const src = path.join(srcBase, f);
  const dst = path.join(dstBase, f);
  fs.copyFileSync(src, dst);
  console.log('copied:', f);
});

// Also copy dist/lib if missing
const srcLib = path.join(tmp, 'package', 'dist', 'lib');
const dstLib = path.join('node_modules', 'caniuse-lite', 'dist', 'lib');
if (fs.existsSync(srcLib) && !fs.existsSync(dstLib)) {
  fs.mkdirSync(dstLib, { recursive: true });
  fs.readdirSync(srcLib).forEach(f => {
    fs.copyFileSync(path.join(srcLib, f), path.join(dstLib, f));
    console.log('copied lib:', f);
  });
}

console.log('Done!');
