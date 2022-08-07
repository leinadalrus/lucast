const sanitizer = new Sanitizer();  // Default sanitizer;
const element = document.getElementsByClassName("page-model-delta");
element.setHTML({sanitizer: sanitizer});
