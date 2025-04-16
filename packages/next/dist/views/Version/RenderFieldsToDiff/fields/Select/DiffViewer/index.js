'use client';

import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer-continued';
export const DiffViewer = ({
  comparisonToRender,
  diffMethod,
  diffStyles,
  placeholder,
  versionToRender
}) => {
  return /*#__PURE__*/_jsx(ReactDiffViewer, {
    compareMethod: DiffMethod[diffMethod],
    hideLineNumbers: true,
    newValue: typeof versionToRender !== 'undefined' ? versionToRender : placeholder,
    oldValue: comparisonToRender,
    showDiffOnly: false,
    splitView: true,
    styles: diffStyles
  });
};
//# sourceMappingURL=index.js.map