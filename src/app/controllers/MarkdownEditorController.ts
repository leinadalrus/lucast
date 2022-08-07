import { marked } from "marked";
import { useRouter } from "next/router";
import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import ModelController from "./ModelController";

class MarkdownEditorController extends ModelController {
  constructor() {
    super();
    const markdownEditorOps = {
      src: "/public/documents",
      type: "file/md"
    };
  }
};

export default MarkdownEditorController;