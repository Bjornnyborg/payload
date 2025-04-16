import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { FieldDiffLabel } from '@payloadcms/ui/rsc';
import React from 'react';
import '../bundled.css';
import { convertLexicalToHTMLAsync } from '../../features/converters/lexicalToHtml/async/index.js';
import { getPayloadPopulateFn } from '../../features/converters/utilities/payloadPopulateFn.js';
import { LinkDiffHTMLConverterAsync } from './converters/link.js';
import { ListItemDiffHTMLConverterAsync } from './converters/listitem/index.js';
import { RelationshipDiffHTMLConverterAsync } from './converters/relationship/index.js';
import { UnknownDiffHTMLConverterAsync } from './converters/unknown/index.js';
import { UploadDiffHTMLConverterAsync } from './converters/upload/index.js';
import { HtmlDiff } from './htmlDiff/index.js';
const baseClass = 'lexical-diff';
export const LexicalDiffComponent = async args => {
  const {
    comparisonValue,
    field,
    i18n,
    locale,
    versionValue
  } = args;
  const converters = ({
    defaultConverters
  }) => ({
    ...defaultConverters,
    ...LinkDiffHTMLConverterAsync({}),
    ...ListItemDiffHTMLConverterAsync,
    ...UploadDiffHTMLConverterAsync({
      i18n: args.i18n,
      req: args.req
    }),
    ...RelationshipDiffHTMLConverterAsync({
      i18n: args.i18n,
      req: args.req
    }),
    ...UnknownDiffHTMLConverterAsync({
      i18n: args.i18n,
      req: args.req
    })
  });
  const payloadPopulateFn = await getPayloadPopulateFn({
    currentDepth: 0,
    depth: 1,
    req: args.req
  });
  const comparisonHTML = await convertLexicalToHTMLAsync({
    converters,
    data: comparisonValue,
    populate: payloadPopulateFn
  });
  const versionHTML = await convertLexicalToHTMLAsync({
    converters,
    data: versionValue,
    populate: payloadPopulateFn
  });
  const diffHTML = new HtmlDiff(comparisonHTML, versionHTML);
  const [oldHTML, newHTML] = diffHTML.getSideBySideContents();
  return /*#__PURE__*/_jsxs("div", {
    className: baseClass,
    children: [/*#__PURE__*/_jsxs(FieldDiffLabel, {
      children: [locale && /*#__PURE__*/_jsx("span", {
        className: `${baseClass}__locale-label`,
        children: locale
      }), 'label' in field && typeof field.label !== 'function' && getTranslation(field.label || '', i18n)]
    }), /*#__PURE__*/_jsxs("div", {
      className: `${baseClass}__diff-container`,
      children: [oldHTML && /*#__PURE__*/_jsx("div", {
        className: `${baseClass}__diff-old`,
        dangerouslySetInnerHTML: {
          __html: oldHTML
        }
      }), newHTML && /*#__PURE__*/_jsx("div", {
        className: `${baseClass}__diff-new`,
        dangerouslySetInnerHTML: {
          __html: newHTML
        }
      })]
    })]
  });
};
//# sourceMappingURL=index.js.map