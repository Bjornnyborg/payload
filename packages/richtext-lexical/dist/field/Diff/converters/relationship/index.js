import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
const baseClass = 'lexical-relationship-diff';
export const RelationshipDiffHTMLConverterAsync = ({
  i18n,
  req
}) => {
  return {
    relationship: async ({
      node,
      populate,
      providedCSSString
    }) => {
      let data = undefined;
      // If there's no valid upload data, populate return an empty string
      if (typeof node.value !== 'object') {
        if (!populate) {
          return '';
        }
        data = await populate({
          id: node.value,
          collectionSlug: node.relationTo
        });
      } else {
        data = node.value;
      }
      const relatedCollection = req.payload.collections[node.relationTo]?.config;
      const ReactDOMServer = (await import('react-dom/server')).default;
      const JSX = /*#__PURE__*/_jsx("div", {
        className: `${baseClass}${providedCSSString}`,
        "data-enable-match": "true",
        "data-id": node.value,
        "data-slug": node.relationTo,
        children: /*#__PURE__*/_jsxs("div", {
          className: `${baseClass}__card`,
          children: [/*#__PURE__*/_jsx("div", {
            className: `${baseClass}__collectionLabel`,
            children: i18n.t('fields:labelRelationship', {
              label: relatedCollection?.labels?.singular ? getTranslation(relatedCollection?.labels?.singular, i18n) : relatedCollection?.slug
            })
          }), data && relatedCollection?.admin?.useAsTitle && data[relatedCollection.admin.useAsTitle] ? /*#__PURE__*/_jsx("strong", {
            className: `${baseClass}__title`,
            "data-enable-match": "false",
            children: /*#__PURE__*/_jsx("a", {
              className: `${baseClass}__link`,
              "data-enable-match": "false",
              href: `/${relatedCollection.slug}/${data.id}`,
              rel: "noopener noreferrer",
              target: "_blank",
              children: data[relatedCollection.admin.useAsTitle]
            })
          }) : /*#__PURE__*/_jsx("strong", {
            children: node.value
          })]
        })
      });
      // Render to HTML
      const html = ReactDOMServer.renderToString(JSX);
      return html;
    }
  };
};
//# sourceMappingURL=index.js.map