<script setup>
import { ref } from "vue";

// import Prism Editor
import { PrismEditor } from "vue-prism-editor"; //
import "prismjs/themes/prism.css"; // import the styles somewhere
import "vue-prism-editor/dist/prismeditor.min.css";

// import highlighting library (you can use any library you want just return html string)
import prism from "prismjs";

// clipboard
import useClipboard from "vue-clipboard3";

// prop
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: "",
  },
});

// variables
const { toClipboard } = useClipboard();
const editorCode = ref(props.code);

// functions
const copy = async (event) => {
  try {
    await toClipboard(editorCode.value);
    const el = event.target.parentElement;
    var alert = document.createElement("div");
    alert.classList.add(
      "alert",
      "alert-success",
      "position-absolute",
      "top-5",
      "border-0",
      "text-white",
      "w-25",
      "end-0",
      "start-0",
      "mt-2",
      "mx-auto",
      "py-2"
    );
    alert.style.transform = "translate3d(0px, 0px, 0px)";
    alert.style.opacity = "0";
    alert.style.transition = ".35s ease";
    setTimeout(function () {
      alert.style.transform = "translate3d(0px, 20px, 0px)";
      alert.style.setProperty("opacity", "1", "important");
    }, 100);
    alert.innerHTML = "Code successfully copied!";
    el.parentElement.appendChild(alert);
    setTimeout(function () {
      alert.style.transform = "translate3d(0px, 0px, 0px)";
      alert.style.setProperty("opacity", "0", "important");
    }, 2000);
    setTimeout(function () {
      el.parentElement.querySelector(".alert").remove();
    }, 2500);

  } catch (e) {
    console.error(e);
  }
};

const highlighter = (code) => {
  return prism.highlight(code, prism.languages.html);
};
</script>

<template>
  <div
    class="position-relative border-radius-xl overflow-hidden shadow-lg mb-7"
  >
    <div class="container border-bottom">
      <div class="row justify-space-between py-2">
        <div class="col-lg-3 me-auto">
          <p class="lead text-dark pt-1 mb-0">{{ title }}</p>
        </div>
        
      </div>
    </div>
    <div class="tab-content tab-space">
     
      </div>
      
    </div>
  
</template>
<style>
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  color: black;
  /* you must provide font-family font-size line-height. Example: */
  font-family: Consolas, Fira Mono, Menlo, Courier, monospace;
  font-size: 1em;
  line-height: 1.5;
  padding: 5px;
  tab-size: 4;
}
/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
