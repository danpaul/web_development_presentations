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

# Presentation title

---

<!-- class: lead -->

## Section title

- First point
- Second point

---

## Slide with a background image

![bg contain right:50%](./assets/example.png)

- Replace `assets/example.png` with the image for this slide
- Keep the path relative to this file

---

## Progressive disclosure

<div data-marpit-fragment>

### First point

</div>

<div data-marpit-fragment>

### Second point

</div>

<div data-marpit-fragment>

### Third point

</div>
