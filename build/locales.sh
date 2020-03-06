for file in ./src/locales/*
do
  name="${file##*/}"
  npx rollup --input "$file" --config build/rollup.config.js --format iife --output.name "${name%.js}.min.js"
done
