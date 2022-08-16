# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [4.2.1] - 2022-08-15
### Fixed
- add types to package.json

## [4.2.0] - 2022-05-30
### Added
- diff as an alias for complement

### Fixed
- readme
- ts types

## [4.1.2] - 2022-02-11
### Fixed
- cleanup temp files

## [4.1.1] - 2021-06-20
### Fixed
- index.d.ts

## [4.1.0] - 2021-06-14
### Added
- typescript.

## [4.0.0] - 2021-01-03
### Changed
- named export from index.

### Fixed
- jsdoc
- readme.

## [3.1.1] - 2020-12-24

### Fixed
- `.permutations` to concatenate digits as strings.

## [3.1.0] - 2020-12-19

### Added
- `.permutations(m, separator)` to generate m permutations from the set.

## [3.0.0] - 2020-12-12

### Added
- `.power(m, separator)` to generate the cartesian product between the set elements m times.

### Changed
- default separator in `.product(set, separator)` is now an empty string.

## [2.3.0] - 2020-05-10
### Added
- `.clone()`

## [2.2.1] - 2020-04-25
### Fixed
- remove unused dependency.

## [2.2.0] - 2020-04-25
### Added
- `.equals(set)` to check if two sets are equal. 
- `.filter(cb)` to filter set elements based on a callback.
- `.toArray()` to convert the set into an array.

### Fixed
- README

## [2.1.0] - 2020-04-17
### Added
- enable using a custom separator between elements in `.product`.

## [2.0.2] - 2020-04-03
### Fixed
- README

## [2.0.1] - 2020-04-03
### Fixed
- README & jsdoc

## [2.0.0] - 2020-03-14
### Changed
- extends existing javascript `Set` class.
- implements set operations in the new extended class.
