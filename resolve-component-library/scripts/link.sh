#!/bin/sh

set -eu

currentdir=$PWD

read -p "Please specify the target package [../field-app]: " targetpackage
targetpackage=${targetpackage:-../field-app}

# link target's React copy to avoid resolve muiltiple module resolution
# https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react
read -p "Does target package already have React? [Y/n]: " hasreact
hasreact=${hasreact:-Y}

# creates global link from library
npm link

# go into some other project directory
cd ${targetpackage}

# link the package
npm link @shape-construction/resolve-component-library

cd ${currentdir}

# if target already has React, link it to avoid duplication
[ $hasreact = "Y" ] && npm link $targetpackage/node_modules/react $targetpackage/node_modules/react-dom $targetpackage/node_modules/formik
