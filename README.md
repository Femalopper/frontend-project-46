[![Actions Status](https://github.com/Femalopper/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Femalopper/frontend-project-46/actions)
[![Actions Status](https://github.com/Femalopper/frontend-project-46/workflows/Node%20CI/badge.svg)](https://github.com/Femalopper/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/289c0c03d6d191f6410a/maintainability)](https://codeclimate.com/github/Femalopper/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/289c0c03d6d191f6410a/test_coverage)](https://codeclimate.com/github/Femalopper/frontend-project-46/test_coverage)

## Setup

### Program setup 
```sh
git clone git@github.com:Femalopper/frontend-project-46.git

cd frontend-project-46

make install

sudo npm link
```

**OR**

### Package setup 
```sh
npm install Femalopper/frontend-project-46
```

## Description
***Name of the package***: @hexlet/code</br>
***Goal of the package***: generation the differences between two data structures</br>
***Launch name***: gendiff

**Input and output**: 

1\. Input files: yaml, json.

> The program accepts input arguments - the paths to yaml or json files. The paths taken are:
>   - absolute: 
> ```sh
> gendiff /home/angel/frontend-project-46/__fixtures__/file1.json /home/angel/frontend-project-46/__fixtures__/file2.json</br>
> ```
> or 
>   - relative: 
> ```sh 
> gendiff file1.json file2.json</br>
> ```
> The reader and parser read and parse the taken paths into objects.

2\. Output: plain text, stylish and json.

> The implemented formatters take input argument - the internal structure of the parsed objects. 
> The result output depends on the chosen format:
>   - plain text
>   - stylish
>   - json

## Program Usage

Program help output:
```sh
gendiff -h
```

Output default(stylish) format:
```sh
gendiff file1.json file2.json
```

Output other formats:
```sh
gendiff file1.json file2.json -f plain
```
or

```sh
gendiff file1.json file2.json -f json
```

## Package Usage
```sh
import genDiff from '@hexlet/code';
```

### JSON files comparison example (flat objects)
[![asciicast](https://asciinema.org/a/PnAZKQomnyIwtRAet5yhezqxd.svg)](https://asciinema.org/a/PnAZKQomnyIwtRAet5yhezqxd)
### YML files comparison example (flat objects)
[![asciicast](https://asciinema.org/a/3ecNphbQcOVEVqPTs4WnF2s5T.svg)](https://asciinema.org/a/3ecNphbQcOVEVqPTs4WnF2s5T)
### Nested objects comparison (output format - stylish)
[![asciicast](https://asciinema.org/a/G2qZAKfGPIdttW7O2i0MvzK95.svg)](https://asciinema.org/a/G2qZAKfGPIdttW7O2i0MvzK95)
### Nested objects comparison (output format - plain text)
[![asciicast](https://asciinema.org/a/MBFHfij4HWPU4bpyLTSl0fW4K.svg)](https://asciinema.org/a/MBFHfij4HWPU4bpyLTSl0fW4K)
### Nested objects comparison (output format - JSON)
[![asciicast](https://asciinema.org/a/pmbeVkRfpqfgUtVeC0cqm6ANq.svg)](https://asciinema.org/a/pmbeVkRfpqfgUtVeC0cqm6ANq)