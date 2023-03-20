# Lab 2 - Realisations of list data structure

## Variant

My variant is 1120 % 4 = 0

## Description

- Initial [realisation](https://github.com/Nailgy/sdmt-labs/commit/d2bbb9ed11d61ce2cd053f657608b1d486c1298b) of list via singly linked circular.

- Second [realisation](https://github.com/Nailgy/sdmt-labs/commit/0ddfdee27c1fe426e80dc04565e5984b12644001) of list via build-in arrays.

### Build & Run

To build and run, do the following:

1. Clone this repository:

```bash
git clone https://github.com/Nailgy/sdmt-labs.git
```

2. Install Node.js (if you don't have it).
3. Open a terminal and navigate to the folder with this program:

```bash
cd .\sdmt-labs\
```

4. Install the dependencies:

```bash
npm i
```

5. To run the tests:

```bash
npm run test
```

### A commit that failed CI tests

[Commit](https://github.com/Nailgy/sdmt-labs/commit/a20325fc6246d928cf489c68bad348c59d88c881)

## Conclusion

Although writing the tests took no less time than implementing the lists in two ways, the tests significantly helped me in this task. With their help, I was able to quickly identify the problem areas in the second implementation and easily correct them, because I knew exactly what was the reason for not passing the test. Also, the tests helped me make sure that the initial implementation was correct and did not contain errors. Overall, this was my first experience writing tests.
Before, I thought test were pointless, but now I understand that they bring a lot of benefits to projects of any complexity.
