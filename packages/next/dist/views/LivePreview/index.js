import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { LivePreviewClient } from './index.client.js';
export async function LivePreviewView(props) {
  const {
    doc,
    initPageResult
  } = props;
  const {
    collectionConfig,
    globalConfig,
    locale,
    req
  } = initPageResult;
  let livePreviewConfig = req.payload.config?.admin?.livePreview;
  if (collectionConfig) {
    livePreviewConfig = {
      ...(livePreviewConfig || {}),
      ...(collectionConfig.admin.livePreview || {})
    };
  }
  if (globalConfig) {
    livePreviewConfig = {
      ...(livePreviewConfig || {}),
      ...(globalConfig.admin.livePreview || {})
    };
  }
  const breakpoints = [...(livePreviewConfig?.breakpoints || []), {
    name: 'responsive',
    height: '100%',
    label: 'Responsive',
    width: '100%'
  }];
  const url = typeof livePreviewConfig?.url === 'function' ? await livePreviewConfig.url({
    collectionConfig,
    data: doc,
    globalConfig,
    locale,
    req,
    /**
       * @deprecated
       * Use `req.payload` instead. This will be removed in the next major version.
       */
    payload: initPageResult.req.payload
  }) : livePreviewConfig?.url;
  return /*#__PURE__*/_jsx(LivePreviewClient, {
    breakpoints: breakpoints,
    Description: props.Description,
    initialData: doc,
    PreviewButton: props.PreviewButton,
    PublishButton: props.PublishButton,
    SaveButton: props.SaveButton,
    SaveDraftButton: props.SaveDraftButton,
    Upload: props.Upload,
    url: url
  });
}
//# sourceMappingURL=index.js.map