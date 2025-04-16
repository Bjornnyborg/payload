'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { Link, NavGroup, useConfig, useTranslation } from '@payloadcms/ui';
import { EntityType } from '@payloadcms/ui/shared';
import { usePathname } from 'next/navigation.js';
import { formatAdminURL } from 'payload/shared';
import React, { Fragment } from 'react';
const baseClass = 'nav';
export const DefaultNavClient = t0 => {
  const $ = _c(11);
  const {
    groups,
    navPreferences
  } = t0;
  const pathname = usePathname();
  const {
    config: t1
  } = useConfig();
  const {
    routes: t2
  } = t1;
  const {
    admin: adminRoute
  } = t2;
  const {
    i18n
  } = useTranslation();
  let t3;
  if ($[0] !== adminRoute || $[1] !== groups || $[2] !== i18n || $[3] !== navPreferences?.groups || $[4] !== pathname) {
    let t4;
    if ($[6] !== adminRoute || $[7] !== i18n || $[8] !== navPreferences?.groups || $[9] !== pathname) {
      t4 = (t5, key) => {
        const {
          entities,
          label
        } = t5;
        return _jsx(NavGroup, {
          isOpen: navPreferences?.groups?.[label]?.open,
          label,
          children: entities.map((t6, i) => {
            const {
              slug,
              type,
              label: label_0
            } = t6;
            let href;
            let id;
            if (type === EntityType.collection) {
              href = formatAdminURL({
                adminRoute,
                path: `/collections/${slug}`
              });
              id = `nav-${slug}`;
            }
            if (type === EntityType.global) {
              href = formatAdminURL({
                adminRoute,
                path: `/globals/${slug}`
              });
              id = `nav-global-${slug}`;
            }
            const isActive = pathname.startsWith(href) && ["/", undefined].includes(pathname[href.length]);
            const Label = _jsxs(_Fragment, {
              children: [isActive && _jsx("div", {
                className: `${baseClass}__link-indicator`
              }), _jsx("span", {
                className: `${baseClass}__link-label`,
                children: getTranslation(label_0, i18n)
              })]
            });
            if (pathname === href) {
              return _jsx("div", {
                className: `${baseClass}__link`,
                id,
                children: Label
              }, i);
            }
            return _jsx(Link, {
              className: `${baseClass}__link`,
              href,
              id,
              prefetch: false,
              children: Label
            }, i);
          })
        }, key);
      };
      $[6] = adminRoute;
      $[7] = i18n;
      $[8] = navPreferences?.groups;
      $[9] = pathname;
      $[10] = t4;
    } else {
      t4 = $[10];
    }
    t3 = _jsx(Fragment, {
      children: groups.map(t4)
    });
    $[0] = adminRoute;
    $[1] = groups;
    $[2] = i18n;
    $[3] = navPreferences?.groups;
    $[4] = pathname;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
};
//# sourceMappingURL=index.client.js.map