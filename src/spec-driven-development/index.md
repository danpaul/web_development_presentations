---
marp: true
theme: default
paginate: true
---

<!-- only include once in document -->
<style scoped>
@media screen {
  /* Hide not current fragments */
  [data-marpit-fragment]:not([data-marpit-fragment]:current) {
    display: none;
  }
}
</style>

<!-- class: invert -->

# Spec-Driven Development

---

<!-- class: lead -->

## Start from the spec

- Describe the behavior before writing the code
- Treat the spec as the source of truth

---

## The spec in the loop

![bg contain right:50%](./assets/example.png)

- Agree on inputs, outputs, and edge cases
- Change the spec when the behavior changes

---

## From spec to code

<div data-marpit-fragment>

### Write the spec

</div>

<div data-marpit-fragment>

### Review it with the people who will use it

</div>

<div data-marpit-fragment>

### Implement only what the spec describes

</div>
