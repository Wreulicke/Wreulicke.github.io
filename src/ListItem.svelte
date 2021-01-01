<style>
  li {
    list-style: none;
    padding: 1em;
    transition: background 0.8s;
  }
  li:hover {
    background-color: #5F9BC9;
  }
  li:hover::after {
    width: 100%;
    transition: width 0.4s ease 0s;
  }
  li::after {
    content: "";
    display: block;
    height: 2px;
    transition: width 0.4s ease 0s;
    width: 0px;
    background: #40688F;
  }
</style>

<li>
  <slot />
</li>
