export const template = 
`<!doctype html>
<html>
  <head>
    <title>Strata by HTML5 UP</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
    <style>
      @import url("fontawesome-all.min.css");
      @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic");

      /*
                Strata by HTML5 UP
                html5up.net | @ajlkn
                Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
            */

      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      body {
        line-height: 1;
      }

      ol,
      ul {
        list-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      body {
        -webkit-text-size-adjust: none;
      }

      mark {
        background-color: transparent;
        color: inherit;
      }

      input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }

      input,
      select,
      textarea {
        -moz-appearance: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        appearance: none;
      }

      /* Basic */

      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        background: #fff;
      }

      body.is-preload *,
      body.is-preload *:before,
      body.is-preload *:after {
        -moz-animation: none !important;
        -webkit-animation: none !important;
        -ms-animation: none !important;
        animation: none !important;
        -moz-transition: none !important;
        -webkit-transition: none !important;
        -ms-transition: none !important;
        transition: none !important;
      }

      body,
      input,
      select,
      textarea {
        color: #a2a2a2;
        font-family: "Source Sans Pro", Helvetica, sans-serif;
        font-size: 16pt;
        font-weight: 400;
        line-height: 1.75em;
      }

      a {
        -moz-transition:
          color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        -webkit-transition:
          color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        -ms-transition:
          color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        transition:
          color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        border-bottom: dotted 1px;
        color: #49bf9d;
        text-decoration: none;
      }

      a:hover {
        border-bottom-color: transparent;
        color: #49bf9d !important;
        text-decoration: none;
      }

      strong,
      b {
        color: #787878;
        font-weight: 400;
      }

      em,
      i {
        font-style: italic;
      }

      p {
        margin: 0 0 2em 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: #787878;
        font-weight: 400;
        line-height: 1em;
        margin: 0 0 1em 0;
      }

      h1 a,
      h2 a,
      h3 a,
      h4 a,
      h5 a,
      h6 a {
        color: inherit;
        text-decoration: none;
      }

      h1 {
        font-size: 2em;
        line-height: 1.5em;
      }

      h2 {
        font-size: 1.5em;
        line-height: 1.5em;
      }

      h3 {
        font-size: 1.25em;
        line-height: 1.5em;
      }

      h4 {
        font-size: 1.1em;
        line-height: 1.5em;
      }

      h5 {
        font-size: 0.9em;
        line-height: 1.5em;
      }

      h6 {
        font-size: 0.7em;
        line-height: 1.5em;
      }

      sub {
        font-size: 0.8em;
        position: relative;
        top: 0.5em;
      }

      sup {
        font-size: 0.8em;
        position: relative;
        top: -0.5em;
      }

      hr {
        border: 0;
        border-bottom: solid 2px #efefef;
        margin: 2em 0;
      }

      hr.major {
        margin: 3em 0;
      }

      blockquote {
        border-left: solid 6px #efefef;
        font-style: italic;
        margin: 0 0 2em 0;
        padding: 0.5em 0 0.5em 1.5em;
      }

      code {
        background: #f7f7f7;
        border-radius: 0.35em;
        border: solid 2px #efefef;
        font-family: "Courier New", monospace;
        font-size: 0.9em;
        margin: 0 0.25em;
        padding: 0.25em 0.65em;
      }

      pre {
        -webkit-overflow-scrolling: touch;
        font-family: "Courier New", monospace;
        font-size: 0.9em;
        margin: 0 0 2em 0;
      }

      pre code {
        display: block;
        line-height: 1.75em;
        padding: 1em 1.5em;
        overflow-x: auto;
      }

      .align-left {
        text-align: left;
      }

      .align-center {
        text-align: center;
      }

      .align-right {
        text-align: right;
      }

      /* Container */

      .container {
        margin: 0 auto;
        max-width: calc(100% - 4em);
        width: 100%;
      }

      .container.xsmall {
        width: 25%;
      }

      .container.small {
        width: 50%;
      }

      .container.medium {
        width: 75%;
      }

      .container.large {
        width: 125%;
      }

      .container.xlarge {
        width: 150%;
      }

      .container.max {
        width: 100%;
      }

      @media screen and (max-width: 980px) {
        .container {
          width: 100% !important;
          max-width: 100% !important;
        }
      }

      @media screen and (max-width: 480px) {
        .container {
          max-width: calc(100% - 3em);
        }
      }

      /* Row */

      .row {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        align-items: stretch;
      }

      .row > * {
        box-sizing: border-box;
      }

      .row.gtr-uniform > * > :last-child {
        margin-bottom: 0;
      }

      .row.aln-left {
        justify-content: flex-start;
      }

      .row.aln-center {
        justify-content: center;
      }

      .row.aln-right {
        justify-content: flex-end;
      }

      .row.aln-top {
        align-items: flex-start;
      }

      .row.aln-middle {
        align-items: center;
      }

      .row.aln-bottom {
        align-items: flex-end;
      }

      .row > .imp {
        order: -1;
      }

      .row > .col-1 {
        width: 8.33333%;
      }

      .row > .off-1 {
        margin-left: 8.33333%;
      }

      .row > .col-2 {
        width: 16.66667%;
      }

      .row > .off-2 {
        margin-left: 16.66667%;
      }

      .row > .col-3 {
        width: 25%;
      }

      .row > .off-3 {
        margin-left: 25%;
      }

      .row > .col-4 {
        width: 33.33333%;
      }

      .row > .off-4 {
        margin-left: 33.33333%;
      }

      .row > .col-5 {
        width: 41.66667%;
      }

      .row > .off-5 {
        margin-left: 41.66667%;
      }

      .row > .col-6 {
        width: 50%;
      }

      .row > .off-6 {
        margin-left: 50%;
      }

      .row > .col-7 {
        width: 58.33333%;
      }

      .row > .off-7 {
        margin-left: 58.33333%;
      }

      .row > .col-8 {
        width: 66.66667%;
      }

      .row > .off-8 {
        margin-left: 66.66667%;
      }

      .row > .col-9 {
        width: 75%;
      }

      .row > .off-9 {
        margin-left: 75%;
      }

      .row > .col-10 {
        width: 83.33333%;
      }

      .row > .off-10 {
        margin-left: 83.33333%;
      }

      .row > .col-11 {
        width: 91.66667%;
      }

      .row > .off-11 {
        margin-left: 91.66667%;
      }

      .row > .col-12 {
        width: 100%;
      }

      .row > .off-12 {
        margin-left: 100%;
      }

      .row.gtr-0 {
        margin-top: 0;
        margin-left: 0em;
      }

      .row.gtr-0 > * {
        padding: 0 0 0 0em;
      }

      .row.gtr-0.gtr-uniform {
        margin-top: 0em;
      }

      .row.gtr-0.gtr-uniform > * {
        padding-top: 0em;
      }

      .row.gtr-25 {
        margin-top: 0;
        margin-left: -0.625em;
      }

      .row.gtr-25 > * {
        padding: 0 0 0 0.625em;
      }

      .row.gtr-25.gtr-uniform {
        margin-top: -0.625em;
      }

      .row.gtr-25.gtr-uniform > * {
        padding-top: 0.625em;
      }

      .row.gtr-50 {
        margin-top: 0;
        margin-left: -1.25em;
      }

      .row.gtr-50 > * {
        padding: 0 0 0 1.25em;
      }

      .row.gtr-50.gtr-uniform {
        margin-top: -1.25em;
      }

      .row.gtr-50.gtr-uniform > * {
        padding-top: 1.25em;
      }

      .row {
        margin-top: 0;
        margin-left: -2.5em;
      }

      .row > * {
        padding: 0 0 0 2.5em;
      }

      .row.gtr-uniform {
        margin-top: -2.5em;
      }

      .row.gtr-uniform > * {
        padding-top: 2.5em;
      }

      .row.gtr-150 {
        margin-top: 0;
        margin-left: -3.75em;
      }

      .row.gtr-150 > * {
        padding: 0 0 0 3.75em;
      }

      .row.gtr-150.gtr-uniform {
        margin-top: -3.75em;
      }

      .row.gtr-150.gtr-uniform > * {
        padding-top: 3.75em;
      }

      .row.gtr-200 {
        margin-top: 0;
        margin-left: -5em;
      }

      .row.gtr-200 > * {
        padding: 0 0 0 5em;
      }

      .row.gtr-200.gtr-uniform {
        margin-top: -5em;
      }

      .row.gtr-200.gtr-uniform > * {
        padding-top: 5em;
      }

      @media screen and (max-width: 1800px) {
        .row {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          align-items: stretch;
        }

        .row > * {
          box-sizing: border-box;
        }

        .row.gtr-uniform > * > :last-child {
          margin-bottom: 0;
        }

        .row.aln-left {
          justify-content: flex-start;
        }

        .row.aln-center {
          justify-content: center;
        }

        .row.aln-right {
          justify-content: flex-end;
        }

        .row.aln-top {
          align-items: flex-start;
        }

        .row.aln-middle {
          align-items: center;
        }

        .row.aln-bottom {
          align-items: flex-end;
        }

        .row > .imp-xlarge {
          order: -1;
        }

        .row > .col-1-xlarge {
          width: 8.33333%;
        }

        .row > .off-1-xlarge {
          margin-left: 8.33333%;
        }

        .row > .col-2-xlarge {
          width: 16.66667%;
        }

        .row > .off-2-xlarge {
          margin-left: 16.66667%;
        }

        .row > .col-3-xlarge {
          width: 25%;
        }

        .row > .off-3-xlarge {
          margin-left: 25%;
        }

        .row > .col-4-xlarge {
          width: 33.33333%;
        }

        .row > .off-4-xlarge {
          margin-left: 33.33333%;
        }

        .row > .col-5-xlarge {
          width: 41.66667%;
        }

        .row > .off-5-xlarge {
          margin-left: 41.66667%;
        }

        .row > .col-6-xlarge {
          width: 50%;
        }

        .row > .off-6-xlarge {
          margin-left: 50%;
        }

        .row > .col-7-xlarge {
          width: 58.33333%;
        }

        .row > .off-7-xlarge {
          margin-left: 58.33333%;
        }

        .row > .col-8-xlarge {
          width: 66.66667%;
        }

        .row > .off-8-xlarge {
          margin-left: 66.66667%;
        }

        .row > .col-9-xlarge {
          width: 75%;
        }

        .row > .off-9-xlarge {
          margin-left: 75%;
        }

        .row > .col-10-xlarge {
          width: 83.33333%;
        }

        .row > .off-10-xlarge {
          margin-left: 83.33333%;
        }

        .row > .col-11-xlarge {
          width: 91.66667%;
        }

        .row > .off-11-xlarge {
          margin-left: 91.66667%;
        }

        .row > .col-12-xlarge {
          width: 100%;
        }

        .row > .off-12-xlarge {
          margin-left: 100%;
        }

        .row.gtr-0 {
          margin-top: 0;
          margin-left: 0em;
        }

        .row.gtr-0 > * {
          padding: 0 0 0 0em;
        }

        .row.gtr-0.gtr-uniform {
          margin-top: 0em;
        }

        .row.gtr-0.gtr-uniform > * {
          padding-top: 0em;
        }

        .row.gtr-25 {
          margin-top: 0;
          margin-left: -0.625em;
        }

        .row.gtr-25 > * {
          padding: 0 0 0 0.625em;
        }

        .row.gtr-25.gtr-uniform {
          margin-top: -0.625em;
        }

        .row.gtr-25.gtr-uniform > * {
          padding-top: 0.625em;
        }

        .row.gtr-50 {
          margin-top: 0;
          margin-left: -1.25em;
        }

        .row.gtr-50 > * {
          padding: 0 0 0 1.25em;
        }

        .row.gtr-50.gtr-uniform {
          margin-top: -1.25em;
        }

        .row.gtr-50.gtr-uniform > * {
          padding-top: 1.25em;
        }

        .row {
          margin-top: 0;
          margin-left: -2.5em;
        }

        .row > * {
          padding: 0 0 0 2.5em;
        }

        .row.gtr-uniform {
          margin-top: -2.5em;
        }

        .row.gtr-uniform > * {
          padding-top: 2.5em;
        }

        .row.gtr-150 {
          margin-top: 0;
          margin-left: -3.75em;
        }

        .row.gtr-150 > * {
          padding: 0 0 0 3.75em;
        }

        .row.gtr-150.gtr-uniform {
          margin-top: -3.75em;
        }

        .row.gtr-150.gtr-uniform > * {
          padding-top: 3.75em;
        }

        .row.gtr-200 {
          margin-top: 0;
          margin-left: -5em;
        }

        .row.gtr-200 > * {
          padding: 0 0 0 5em;
        }

        .row.gtr-200.gtr-uniform {
          margin-top: -5em;
        }

        .row.gtr-200.gtr-uniform > * {
          padding-top: 5em;
        }
      }

      @media screen and (max-width: 1280px) {
        .row {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          align-items: stretch;
        }

        .row > * {
          box-sizing: border-box;
        }

        .row.gtr-uniform > * > :last-child {
          margin-bottom: 0;
        }

        .row.aln-left {
          justify-content: flex-start;
        }

        .row.aln-center {
          justify-content: center;
        }

        .row.aln-right {
          justify-content: flex-end;
        }

        .row.aln-top {
          align-items: flex-start;
        }

        .row.aln-middle {
          align-items: center;
        }

        .row.aln-bottom {
          align-items: flex-end;
        }

        .row > .imp-large {
          order: -1;
        }

        .row > .col-1-large {
          width: 8.33333%;
        }

        .row > .off-1-large {
          margin-left: 8.33333%;
        }

        .row > .col-2-large {
          width: 16.66667%;
        }

        .row > .off-2-large {
          margin-left: 16.66667%;
        }

        .row > .col-3-large {
          width: 25%;
        }

        .row > .off-3-large {
          margin-left: 25%;
        }

        .row > .col-4-large {
          width: 33.33333%;
        }

        .row > .off-4-large {
          margin-left: 33.33333%;
        }

        .row > .col-5-large {
          width: 41.66667%;
        }

        .row > .off-5-large {
          margin-left: 41.66667%;
        }

        .row > .col-6-large {
          width: 50%;
        }

        .row > .off-6-large {
          margin-left: 50%;
        }

        .row > .col-7-large {
          width: 58.33333%;
        }

        .row > .off-7-large {
          margin-left: 58.33333%;
        }

        .row > .col-8-large {
          width: 66.66667%;
        }

        .row > .off-8-large {
          margin-left: 66.66667%;
        }

        .row > .col-9-large {
          width: 75%;
        }

        .row > .off-9-large {
          margin-left: 75%;
        }

        .row > .col-10-large {
          width: 83.33333%;
        }

        .row > .off-10-large {
          margin-left: 83.33333%;
        }

        .row > .col-11-large {
          width: 91.66667%;
        }

        .row > .off-11-large {
          margin-left: 91.66667%;
        }

        .row > .col-12-large {
          width: 100%;
        }

        .row > .off-12-large {
          margin-left: 100%;
        }

        .row.gtr-0 {
          margin-top: 0;
          margin-left: 0em;
        }

        .row.gtr-0 > * {
          padding: 0 0 0 0em;
        }

        .row.gtr-0.gtr-uniform {
          margin-top: 0em;
        }

        .row.gtr-0.gtr-uniform > * {
          padding-top: 0em;
        }

        .row.gtr-25 {
          margin-top: 0;
          margin-left: -0.5em;
        }

        .row.gtr-25 > * {
          padding: 0 0 0 0.5em;
        }

        .row.gtr-25.gtr-uniform {
          margin-top: -0.5em;
        }

        .row.gtr-25.gtr-uniform > * {
          padding-top: 0.5em;
        }

        .row.gtr-50 {
          margin-top: 0;
          margin-left: -1em;
        }

        .row.gtr-50 > * {
          padding: 0 0 0 1em;
        }

        .row.gtr-50.gtr-uniform {
          margin-top: -1em;
        }

        .row.gtr-50.gtr-uniform > * {
          padding-top: 1em;
        }

        .row {
          margin-top: 0;
          margin-left: -2em;
        }

        .row > * {
          padding: 0 0 0 2em;
        }

        .row.gtr-uniform {
          margin-top: -2em;
        }

        .row.gtr-uniform > * {
          padding-top: 2em;
        }

        .row.gtr-150 {
          margin-top: 0;
          margin-left: -3em;
        }

        .row.gtr-150 > * {
          padding: 0 0 0 3em;
        }

        .row.gtr-150.gtr-uniform {
          margin-top: -3em;
        }

        .row.gtr-150.gtr-uniform > * {
          padding-top: 3em;
        }

        .row.gtr-200 {
          margin-top: 0;
          margin-left: -4em;
        }

        .row.gtr-200 > * {
          padding: 0 0 0 4em;
        }

        .row.gtr-200.gtr-uniform {
          margin-top: -4em;
        }

        .row.gtr-200.gtr-uniform > * {
          padding-top: 4em;
        }
      }

      @media screen and (max-width: 980px) {
        .row {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          align-items: stretch;
        }

        .row > * {
          box-sizing: border-box;
        }

        .row.gtr-uniform > * > :last-child {
          margin-bottom: 0;
        }

        .row.aln-left {
          justify-content: flex-start;
        }

        .row.aln-center {
          justify-content: center;
        }

        .row.aln-right {
          justify-content: flex-end;
        }

        .row.aln-top {
          align-items: flex-start;
        }

        .row.aln-middle {
          align-items: center;
        }

        .row.aln-bottom {
          align-items: flex-end;
        }

        .row > .imp-medium {
          order: -1;
        }

        .row > .col-1-medium {
          width: 8.33333%;
        }

        .row > .off-1-medium {
          margin-left: 8.33333%;
        }

        .row > .col-2-medium {
          width: 16.66667%;
        }

        .row > .off-2-medium {
          margin-left: 16.66667%;
        }

        .row > .col-3-medium {
          width: 25%;
        }

        .row > .off-3-medium {
          margin-left: 25%;
        }

        .row > .col-4-medium {
          width: 33.33333%;
        }

        .row > .off-4-medium {
          margin-left: 33.33333%;
        }

        .row > .col-5-medium {
          width: 41.66667%;
        }

        .row > .off-5-medium {
          margin-left: 41.66667%;
        }

        .row > .col-6-medium {
          width: 50%;
        }

        .row > .off-6-medium {
          margin-left: 50%;
        }

        .row > .col-7-medium {
          width: 58.33333%;
        }

        .row > .off-7-medium {
          margin-left: 58.33333%;
        }

        .row > .col-8-medium {
          width: 66.66667%;
        }

        .row > .off-8-medium {
          margin-left: 66.66667%;
        }

        .row > .col-9-medium {
          width: 75%;
        }

        .row > .off-9-medium {
          margin-left: 75%;
        }

        .row > .col-10-medium {
          width: 83.33333%;
        }

        .row > .off-10-medium {
          margin-left: 83.33333%;
        }

        .row > .col-11-medium {
          width: 91.66667%;
        }

        .row > .off-11-medium {
          margin-left: 91.66667%;
        }

        .row > .col-12-medium {
          width: 100%;
        }

        .row > .off-12-medium {
          margin-left: 100%;
        }

        .row.gtr-0 {
          margin-top: 0;
          margin-left: 0em;
        }

        .row.gtr-0 > * {
          padding: 0 0 0 0em;
        }

        .row.gtr-0.gtr-uniform {
          margin-top: 0em;
        }

        .row.gtr-0.gtr-uniform > * {
          padding-top: 0em;
        }

        .row.gtr-25 {
          margin-top: 0;
          margin-left: -0.5em;
        }

        .row.gtr-25 > * {
          padding: 0 0 0 0.5em;
        }

        .row.gtr-25.gtr-uniform {
          margin-top: -0.5em;
        }

        .row.gtr-25.gtr-uniform > * {
          padding-top: 0.5em;
        }

        .row.gtr-50 {
          margin-top: 0;
          margin-left: -1em;
        }

        .row.gtr-50 > * {
          padding: 0 0 0 1em;
        }

        .row.gtr-50.gtr-uniform {
          margin-top: -1em;
        }

        .row.gtr-50.gtr-uniform > * {
          padding-top: 1em;
        }

        .row {
          margin-top: 0;
          margin-left: -2em;
        }

        .row > * {
          padding: 0 0 0 2em;
        }

        .row.gtr-uniform {
          margin-top: -2em;
        }

        .row.gtr-uniform > * {
          padding-top: 2em;
        }

        .row.gtr-150 {
          margin-top: 0;
          margin-left: -3em;
        }

        .row.gtr-150 > * {
          padding: 0 0 0 3em;
        }

        .row.gtr-150.gtr-uniform {
          margin-top: -3em;
        }

        .row.gtr-150.gtr-uniform > * {
          padding-top: 3em;
        }

        .row.gtr-200 {
          margin-top: 0;
          margin-left: -4em;
        }

        .row.gtr-200 > * {
          padding: 0 0 0 4em;
        }

        .row.gtr-200.gtr-uniform {
          margin-top: -4em;
        }

        .row.gtr-200.gtr-uniform > * {
          padding-top: 4em;
        }
      }

      @media screen and (max-width: 736px) {
        .row {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          align-items: stretch;
        }

        .row > * {
          box-sizing: border-box;
        }

        .row.gtr-uniform > * > :last-child {
          margin-bottom: 0;
        }

        .row.aln-left {
          justify-content: flex-start;
        }

        .row.aln-center {
          justify-content: center;
        }

        .row.aln-right {
          justify-content: flex-end;
        }

        .row.aln-top {
          align-items: flex-start;
        }

        .row.aln-middle {
          align-items: center;
        }

        .row.aln-bottom {
          align-items: flex-end;
        }

        .row > .imp-small {
          order: -1;
        }

        .row > .col-1-small {
          width: 8.33333%;
        }

        .row > .off-1-small {
          margin-left: 8.33333%;
        }

        .row > .col-2-small {
          width: 16.66667%;
        }

        .row > .off-2-small {
          margin-left: 16.66667%;
        }

        .row > .col-3-small {
          width: 25%;
        }

        .row > .off-3-small {
          margin-left: 25%;
        }

        .row > .col-4-small {
          width: 33.33333%;
        }

        .row > .off-4-small {
          margin-left: 33.33333%;
        }

        .row > .col-5-small {
          width: 41.66667%;
        }

        .row > .off-5-small {
          margin-left: 41.66667%;
        }

        .row > .col-6-small {
          width: 50%;
        }

        .row > .off-6-small {
          margin-left: 50%;
        }

        .row > .col-7-small {
          width: 58.33333%;
        }

        .row > .off-7-small {
          margin-left: 58.33333%;
        }

        .row > .col-8-small {
          width: 66.66667%;
        }

        .row > .off-8-small {
          margin-left: 66.66667%;
        }

        .row > .col-9-small {
          width: 75%;
        }

        .row > .off-9-small {
          margin-left: 75%;
        }

        .row > .col-10-small {
          width: 83.33333%;
        }

        .row > .off-10-small {
          margin-left: 83.33333%;
        }

        .row > .col-11-small {
          width: 91.66667%;
        }

        .row > .off-11-small {
          margin-left: 91.66667%;
        }

        .row > .col-12-small {
          width: 100%;
        }

        .row > .off-12-small {
          margin-left: 100%;
        }

        .row.gtr-0 {
          margin-top: 0;
          margin-left: 0em;
        }

        .row.gtr-0 > * {
          padding: 0 0 0 0em;
        }

        .row.gtr-0.gtr-uniform {
          margin-top: 0em;
        }

        .row.gtr-0.gtr-uniform > * {
          padding-top: 0em;
        }

        .row.gtr-25 {
          margin-top: 0;
          margin-left: -0.375em;
        }

        .row.gtr-25 > * {
          padding: 0 0 0 0.375em;
        }

        .row.gtr-25.gtr-uniform {
          margin-top: -0.375em;
        }

        .row.gtr-25.gtr-uniform > * {
          padding-top: 0.375em;
        }

        .row.gtr-50 {
          margin-top: 0;
          margin-left: -0.75em;
        }

        .row.gtr-50 > * {
          padding: 0 0 0 0.75em;
        }

        .row.gtr-50.gtr-uniform {
          margin-top: -0.75em;
        }

        .row.gtr-50.gtr-uniform > * {
          padding-top: 0.75em;
        }

        .row {
          margin-top: 0;
          margin-left: -1.5em;
        }

        .row > * {
          padding: 0 0 0 1.5em;
        }

        .row.gtr-uniform {
          margin-top: -1.5em;
        }

        .row.gtr-uniform > * {
          padding-top: 1.5em;
        }

        .row.gtr-150 {
          margin-top: 0;
          margin-left: -2.25em;
        }

        .row.gtr-150 > * {
          padding: 0 0 0 2.25em;
        }

        .row.gtr-150.gtr-uniform {
          margin-top: -2.25em;
        }

        .row.gtr-150.gtr-uniform > * {
          padding-top: 2.25em;
        }

        .row.gtr-200 {
          margin-top: 0;
          margin-left: -3em;
        }

        .row.gtr-200 > * {
          padding: 0 0 0 3em;
        }

        .row.gtr-200.gtr-uniform {
          margin-top: -3em;
        }

        .row.gtr-200.gtr-uniform > * {
          padding-top: 3em;
        }
      }

      @media screen and (max-width: 480px) {
        .row {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          align-items: stretch;
        }

        .row > * {
          box-sizing: border-box;
        }

        .row.gtr-uniform > * > :last-child {
          margin-bottom: 0;
        }

        .row.aln-left {
          justify-content: flex-start;
        }

        .row.aln-center {
          justify-content: center;
        }

        .row.aln-right {
          justify-content: flex-end;
        }

        .row.aln-top {
          align-items: flex-start;
        }

        .row.aln-middle {
          align-items: center;
        }

        .row.aln-bottom {
          align-items: flex-end;
        }

        .row > .imp-xsmall {
          order: -1;
        }

        .row > .col-1-xsmall {
          width: 8.33333%;
        }

        .row > .off-1-xsmall {
          margin-left: 8.33333%;
        }

        .row > .col-2-xsmall {
          width: 16.66667%;
        }

        .row > .off-2-xsmall {
          margin-left: 16.66667%;
        }

        .row > .col-3-xsmall {
          width: 25%;
        }

        .row > .off-3-xsmall {
          margin-left: 25%;
        }

        .row > .col-4-xsmall {
          width: 33.33333%;
        }

        .row > .off-4-xsmall {
          margin-left: 33.33333%;
        }

        .row > .col-5-xsmall {
          width: 41.66667%;
        }

        .row > .off-5-xsmall {
          margin-left: 41.66667%;
        }

        .row > .col-6-xsmall {
          width: 50%;
        }

        .row > .off-6-xsmall {
          margin-left: 50%;
        }

        .row > .col-7-xsmall {
          width: 58.33333%;
        }

        .row > .off-7-xsmall {
          margin-left: 58.33333%;
        }

        .row > .col-8-xsmall {
          width: 66.66667%;
        }

        .row > .off-8-xsmall {
          margin-left: 66.66667%;
        }

        .row > .col-9-xsmall {
          width: 75%;
        }

        .row > .off-9-xsmall {
          margin-left: 75%;
        }

        .row > .col-10-xsmall {
          width: 83.33333%;
        }

        .row > .off-10-xsmall {
          margin-left: 83.33333%;
        }

        .row > .col-11-xsmall {
          width: 91.66667%;
        }

        .row > .off-11-xsmall {
          margin-left: 91.66667%;
        }

        .row > .col-12-xsmall {
          width: 100%;
        }

        .row > .off-12-xsmall {
          margin-left: 100%;
        }

        .row.gtr-0 {
          margin-top: 0;
          margin-left: 0em;
        }

        .row.gtr-0 > * {
          padding: 0 0 0 0em;
        }

        .row.gtr-0.gtr-uniform {
          margin-top: 0em;
        }

        .row.gtr-0.gtr-uniform > * {
          padding-top: 0em;
        }

        .row.gtr-25 {
          margin-top: 0;
          margin-left: -0.375em;
        }

        .row.gtr-25 > * {
          padding: 0 0 0 0.375em;
        }

        .row.gtr-25.gtr-uniform {
          margin-top: -0.375em;
        }

        .row.gtr-25.gtr-uniform > * {
          padding-top: 0.375em;
        }

        .row.gtr-50 {
          margin-top: 0;
          margin-left: -0.75em;
        }

        .row.gtr-50 > * {
          padding: 0 0 0 0.75em;
        }

        .row.gtr-50.gtr-uniform {
          margin-top: -0.75em;
        }

        .row.gtr-50.gtr-uniform > * {
          padding-top: 0.75em;
        }

        .row {
          margin-top: 0;
          margin-left: -1.5em;
        }

        .row > * {
          padding: 0 0 0 1.5em;
        }

        .row.gtr-uniform {
          margin-top: -1.5em;
        }

        .row.gtr-uniform > * {
          padding-top: 1.5em;
        }

        .row.gtr-150 {
          margin-top: 0;
          margin-left: -2.25em;
        }

        .row.gtr-150 > * {
          padding: 0 0 0 2.25em;
        }

        .row.gtr-150.gtr-uniform {
          margin-top: -2.25em;
        }

        .row.gtr-150.gtr-uniform > * {
          padding-top: 2.25em;
        }

        .row.gtr-200 {
          margin-top: 0;
          margin-left: -3em;
        }

        .row.gtr-200 > * {
          padding: 0 0 0 3em;
        }

        .row.gtr-200.gtr-uniform {
          margin-top: -3em;
        }

        .row.gtr-200.gtr-uniform > * {
          padding-top: 3em;
        }
      }

      /* Section/Article */

      section.special,
      article.special {
        text-align: center;
      }

      header p {
        color: #b2b2b2;
        position: relative;
        margin: 0 0 1.5em 0;
      }

      header h2 + p {
        font-size: 1.25em;
        margin-top: -1em;
        line-height: 1.5em;
      }

      header h3 + p {
        font-size: 1.1em;
        margin-top: -0.8em;
        line-height: 1.5em;
      }

      header h4 + p,
      header h5 + p,
      header h6 + p {
        font-size: 0.9em;
        margin-top: -0.6em;
        line-height: 1.5em;
      }

      header.major h2 {
        font-size: 2em;
      }

      /* Form */

      form {
        margin: 0 0 2em 0;
      }

      label {
        color: #787878;
        display: block;
        font-size: 0.9em;
        font-weight: 400;
        margin: 0 0 1em 0;
      }

      input[type="text"],
      input[type="password"],
      input[type="email"],
      select,
      textarea {
        -moz-appearance: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        appearance: none;
        background: #f7f7f7;
        border-radius: 0.35em;
        border: solid 2px transparent;
        color: inherit;
        display: block;
        outline: 0;
        padding: 0 0.75em;
        text-decoration: none;
        width: 100%;
      }

      input[type="text"]:invalid,
      input[type="password"]:invalid,
      input[type="email"]:invalid,
      select:invalid,
      textarea:invalid {
        box-shadow: none;
      }

      input[type="text"]:focus,
      input[type="password"]:focus,
      input[type="email"]:focus,
      select:focus,
      textarea:focus {
        border-color: #49bf9d;
      }

      select {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23dfdfdf' /%3E%3C/svg%3E");
        background-size: 1.25rem;
        background-repeat: no-repeat;
        background-position: calc(100% - 1rem) center;
        height: 2.75em;
        padding-right: 2.75em;
        text-overflow: ellipsis;
      }

      select option {
        color: #787878;
        background: #fff;
      }

      select:focus::-ms-value {
        background-color: transparent;
      }

      select::-ms-expand {
        display: none;
      }

      input[type="text"],
      input[type="password"],
      input[type="email"],
      select {
        height: 2.75em;
      }

      textarea {
        padding: 0.75em;
      }

      input[type="checkbox"],
      input[type="radio"] {
        -moz-appearance: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        appearance: none;
        display: block;
        float: left;
        margin-right: -2em;
        opacity: 0;
        width: 1em;
        z-index: -1;
      }

      input[type="checkbox"] + label,
      input[type="radio"] + label {
        text-decoration: none;
        color: #a2a2a2;
        cursor: pointer;
        display: inline-block;
        font-size: 1em;
        font-weight: 400;
        padding-left: 2.4em;
        padding-right: 0.75em;
        position: relative;
      }

      input[type="checkbox"] + label:before,
      input[type="radio"] + label:before {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        text-transform: none !important;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
      }

      input[type="checkbox"] + label:before,
      input[type="radio"] + label:before {
        background: #f7f7f7;
        border-radius: 0.35em;
        border: solid 2px transparent;
        content: "";
        display: inline-block;
        font-size: 0.8em;
        height: 2.0625em;
        left: 0;
        line-height: 1.85625em;
        position: absolute;
        text-align: center;
        top: 0;
        width: 2.0625em;
      }

      input[type="checkbox"]:checked + label:before,
      input[type="radio"]:checked + label:before {
        background: #787878;
        border-color: #787878;
        color: #fff;
        content: "\f00c";
      }

      input[type="checkbox"]:focus + label:before,
      input[type="radio"]:focus + label:before {
        border-color: #49bf9d;
      }

      input[type="checkbox"] + label:before {
        border-radius: 0.35em;
      }

      input[type="radio"] + label:before {
        border-radius: 100%;
      }

      ::-webkit-input-placeholder {
        color: #b2b2b2 !important;
        opacity: 1;
      }

      :-moz-placeholder {
        color: #b2b2b2 !important;
        opacity: 1;
      }

      ::-moz-placeholder {
        color: #b2b2b2 !important;
        opacity: 1;
      }

      :-ms-input-placeholder {
        color: #b2b2b2 !important;
        opacity: 1;
      }

      /* Box */

      .box {
        border-radius: 0.35em;
        border: solid 2px #efefef;
        margin-bottom: 2em;
        padding: 1.5em;
      }

      .box > :last-child,
      .box > :last-child > :last-child,
      .box > :last-child > :last-child > :last-child {
        margin-bottom: 0;
      }

      .box.alt {
        border: 0;
        border-radius: 0;
        padding: 0;
      }

      /* Icon */

      .icon {
        text-decoration: none;
        border-bottom: none;
        position: relative;
      }

      .icon:before {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        text-transform: none !important;
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }

      .icon > .label {
        display: none;
      }

      .icon:before {
        line-height: inherit;
      }

      .icon.solid:before {
        font-weight: 900;
      }

      .icon.brands:before {
        font-family: "Font Awesome 5 Brands";
      }

      /* Image */

      .image {
        border-radius: 0.35em;
        border: 0;
        display: inline-block;
        position: relative;
      }

      .image:before {
        -moz-transition: opacity 0.2s ease-in-out;
        -webkit-transition: opacity 0.2s ease-in-out;
        -ms-transition: opacity 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out;
        background: url("images/overlay.png");
        border-radius: 0.35em;
        content: "";
        display: block;
        height: 100%;
        left: 0;
        opacity: 0.5;
        position: absolute;
        top: 0;
        width: 100%;
      }

      .image.thumb {
        text-align: center;
      }

      .image.thumb:after {
        -moz-transition: opacity 0.2s ease-in-out;
        -webkit-transition: opacity 0.2s ease-in-out;
        -ms-transition: opacity 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out;
        border-radius: 0.35em;
        border: solid 3px rgba(255, 255, 255, 0.5);
        color: #fff;
        content: "View";
        display: inline-block;
        font-size: 0.8em;
        font-weight: 400;
        left: 50%;
        line-height: 2.25em;
        margin: -1.25em 0 0 -3em;
        opacity: 0;
        padding: 0 1.5em;
        position: absolute;
        text-align: center;
        text-decoration: none;
        top: 50%;
        white-space: nowrap;
      }

      .image.thumb:hover:after {
        opacity: 1;
      }

      .image.thumb:hover:before {
        background: url("images/overlay.png"), url("images/overlay.png");
        opacity: 1;
      }

      .image img {
        border-radius: 0.35em;
        display: block;
      }

      .image.left {
        float: left;
        margin: 0 1.5em 1em 0;
        top: 0.25em;
      }

      .image.right {
        float: right;
        margin: 0 0 1em 1.5em;
        top: 0.25em;
      }

      .image.left,
      .image.right {
        max-width: 40%;
      }

      .image.left img,
      .image.right img {
        width: 100%;
      }

      .image.fit {
        display: block;
        margin: 0 0 2em 0;
        width: 100%;
      }

      .image.fit img {
        width: 100%;
      }

      .image.avatar {
        border-radius: 100%;
      }

      .image.avatar:before {
        display: none;
      }

      .image.avatar img {
        border-radius: 100%;
        width: 100%;
      }

      /* List */

      ol {
        list-style: decimal;
        margin: 0 0 2em 0;
        padding-left: 1.25em;
      }

      ol li {
        padding-left: 0.25em;
      }

      ul {
        list-style: disc;
        margin: 0 0 2em 0;
        padding-left: 1em;
      }

      ul li {
        padding-left: 0.5em;
      }

      ul.alt {
        list-style: none;
        padding-left: 0;
      }

      ul.alt li {
        border-top: solid 2px #efefef;
        padding: 0.5em 0;
      }

      ul.alt li:first-child {
        border-top: 0;
        padding-top: 0;
      }

      dl {
        margin: 0 0 2em 0;
      }

      /* Icons */

      ul.icons {
        cursor: default;
        list-style: none;
        padding-left: 0;
      }

      ul.icons li {
        display: inline-block;
        padding: 0 1em 0 0;
      }

      ul.icons li:last-child {
        padding-right: 0;
      }

      ul.icons li .icon:before {
        font-size: 1.5em;
      }

      /* Labeled Icons */

      ul.labeled-icons {
        list-style: none;
        padding: 0;
      }

      ul.labeled-icons li {
        line-height: 1.75em;
        margin: 1.5em 0 0 0;
        padding-left: 2.25em;
        position: relative;
      }

      ul.labeled-icons li:first-child {
        margin-top: 0;
      }

      ul.labeled-icons li a {
        color: inherit;
      }

      ul.labeled-icons li h3 {
        color: #b2b2b2;
        left: 0;
        position: absolute;
        text-align: center;
        top: 0;
        width: 1em;
      }

      /* Actions */

      ul.actions {
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        cursor: default;
        list-style: none;
        margin-left: -1em;
        padding-left: 0;
      }

      ul.actions li {
        padding: 0 0 0 1em;
        vertical-align: middle;
      }

      ul.actions.special {
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        width: 100%;
        margin-left: 0;
      }

      ul.actions.special li:first-child {
        padding-left: 0;
      }

      ul.actions.stacked {
        -moz-flex-direction: column;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-left: 0;
      }

      ul.actions.stacked li {
        padding: 1.3em 0 0 0;
      }

      ul.actions.stacked li:first-child {
        padding-top: 0;
      }

      ul.actions.fit {
        width: calc(100% + 1em);
      }

      ul.actions.fit li {
        -moz-flex-grow: 1;
        -webkit-flex-grow: 1;
        -ms-flex-grow: 1;
        flex-grow: 1;
        -moz-flex-shrink: 1;
        -webkit-flex-shrink: 1;
        -ms-flex-shrink: 1;
        flex-shrink: 1;
        width: 100%;
      }

      ul.actions.fit li > * {
        width: 100%;
      }

      ul.actions.fit.stacked {
        width: 100%;
      }

      @media screen and (max-width: 480px) {
        ul.actions:not(.fixed) {
          -moz-flex-direction: column;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          margin-left: 0;
          width: 100% !important;
        }

        ul.actions:not(.fixed) li {
          -moz-flex-grow: 1;
          -webkit-flex-grow: 1;
          -ms-flex-grow: 1;
          flex-grow: 1;
          -moz-flex-shrink: 1;
          -webkit-flex-shrink: 1;
          -ms-flex-shrink: 1;
          flex-shrink: 1;
          padding: 1em 0 0 0;
          text-align: center;
          width: 100%;
        }

        ul.actions:not(.fixed) li > * {
          width: 100%;
        }

        ul.actions:not(.fixed) li:first-child {
          padding-top: 0;
        }

        ul.actions:not(.fixed) li input[type="submit"],
        ul.actions:not(.fixed) li input[type="reset"],
        ul.actions:not(.fixed) li input[type="button"],
        ul.actions:not(.fixed) li button,
        ul.actions:not(.fixed) li .button {
          width: 100%;
        }

        ul.actions:not(.fixed) li input[type="submit"].icon:before,
        ul.actions:not(.fixed) li input[type="reset"].icon:before,
        ul.actions:not(.fixed) li input[type="button"].icon:before,
        ul.actions:not(.fixed) li button.icon:before,
        ul.actions:not(.fixed) li .button.icon:before {
          margin-left: -0.5em;
        }
      }

      /* Table */

      .table-wrapper {
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
      }

      table {
        margin: 0 0 2em 0;
        width: 100%;
      }

      table tbody tr {
        border: solid 1px #efefef;
        border-left: 0;
        border-right: 0;
      }

      table tbody tr:nth-child(2n + 1) {
        background-color: #f7f7f7;
      }

      table td {
        padding: 0.75em 0.75em;
      }

      table th {
        color: #787878;
        font-size: 0.9em;
        font-weight: 400;
        padding: 0 0.75em 0.75em 0.75em;
        text-align: left;
      }

      table thead {
        border-bottom: solid 2px #efefef;
      }

      table tfoot {
        border-top: solid 2px #efefef;
      }

      table.alt {
        border-collapse: separate;
      }

      table.alt tbody tr td {
        border: solid 2px #efefef;
        border-left-width: 0;
        border-top-width: 0;
      }

      table.alt tbody tr td:first-child {
        border-left-width: 2px;
      }

      table.alt tbody tr:first-child td {
        border-top-width: 2px;
      }

      table.alt thead {
        border-bottom: 0;
      }

      table.alt tfoot {
        border-top: 0;
      }

      /* Button */

      input[type="submit"],
      input[type="reset"],
      input[type="button"],
      .button {
        -moz-appearance: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        appearance: none;
        -moz-transition:
          background-color 0.2s ease-in-out,
          color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        -webkit-transition:
          background-color 0.2s ease-in-out,
          color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        -ms-transition:
          background-color 0.2s ease-in-out,
          color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        transition:
          background-color 0.2s ease-in-out,
          color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        background-color: transparent;
        border-radius: 0.35em;
        border: solid 3px #efefef;
        color: #787878 !important;
        cursor: pointer;
        display: inline-block;
        font-weight: 400;
        height: 3.15em;
        height: calc(2.75em + 6px);
        line-height: 2.75em;
        min-width: 10em;
        padding: 0 1.5em;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
      }

      input[type="submit"]:hover,
      input[type="reset"]:hover,
      input[type="button"]:hover,
      .button:hover {
        border-color: #49bf9d;
        color: #49bf9d !important;
      }

      input[type="submit"]:active,
      input[type="reset"]:active,
      input[type="button"]:active,
      .button:active {
        background-color: rgba(73, 191, 157, 0.1);
        border-color: #49bf9d;
        color: #49bf9d !important;
      }

      input[type="submit"].icon,
      input[type="reset"].icon,
      input[type="button"].icon,
      .button.icon {
        padding-left: 1.35em;
      }

      input[type="submit"].icon:before,
      input[type="reset"].icon:before,
      input[type="button"].icon:before,
      .button.icon:before {
        margin-right: 0.5em;
      }

      input[type="submit"].fit,
      input[type="reset"].fit,
      input[type="button"].fit,
      .button.fit {
        min-width: 0;
        width: 100%;
      }

      input[type="submit"].small,
      input[type="reset"].small,
      input[type="button"].small,
      .button.small {
        font-size: 0.8em;
      }

      input[type="submit"].large,
      input[type="reset"].large,
      input[type="button"].large,
      .button.large {
        font-size: 1.35em;
      }

      input[type="submit"].primary,
      input[type="reset"].primary,
      input[type="button"].primary,
      .button.primary {
        background-color: #49bf9d;
        border-color: #49bf9d;
        color: #ffffff !important;
      }

      input[type="submit"].primary:hover,
      input[type="reset"].primary:hover,
      input[type="button"].primary:hover,
      .button.primary:hover {
        background-color: #5cc6a7;
        border-color: #5cc6a7;
      }

      input[type="submit"].primary:active,
      input[type="reset"].primary:active,
      input[type="button"].primary:active,
      .button.primary:active {
        background-color: #3eb08f;
        border-color: #3eb08f;
      }

      input[type="submit"].disabled,
      input[type="submit"]:disabled,
      input[type="reset"].disabled,
      input[type="reset"]:disabled,
      input[type="button"].disabled,
      input[type="button"]:disabled,
      .button.disabled,
      .button:disabled {
        background-color: #e7e7e7 !important;
        border-color: #e7e7e7 !important;
        color: #b2b2b2 !important;
        cursor: default;
      }

      /* Work Item */

      .work-item {
        margin: 0 0 2em 0;
      }

      .work-item .image {
        margin: 0 0 1.5em 0;
      }

      .work-item h3 {
        font-size: 1em;
        margin: 0 0 0.5em 0;
      }

      .work-item p {
        font-size: 0.8em;
        line-height: 1.5em;
        margin: 0;
      }

      /* Header */

      #header {
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -moz-flex-direction: column;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -moz-align-items: -moz-flex-end;
        -webkit-align-items: -webkit-flex-end;
        -ms-align-items: -ms-flex-end;
        align-items: flex-end;
        -moz-justify-content: space-between;
        -webkit-justify-content: space-between;
        -ms-justify-content: space-between;
        justify-content: space-between;
        background-color: #1f1815;
        background-attachment: scroll, scroll;
        background-image: url("images/overlay.png"), url("../../images/bg.jpg");
        background-position:
          top left,
          top left;
        background-repeat: repeat, no-repeat;
        background-size: auto, 150%;
        color: rgba(255, 255, 255, 0.5);
        height: 100%;
        left: 0;
        padding: 8em 4em;
        position: fixed;
        text-align: right;
        top: 0;
        width: 35%;
      }

      #header > * {
        -moz-flex-shrink: 0;
        -webkit-flex-shrink: 0;
        -ms-flex-shrink: 0;
        flex-shrink: 0;
        width: 100%;
      }

      #header > .inner {
        -moz-flex-grow: 1;
        -webkit-flex-grow: 1;
        -ms-flex-grow: 1;
        flex-grow: 1;
        margin: 0 0 2em 0;
      }

      #header strong,
      #header b {
        color: #ffffff;
      }

      #header h2,
      #header h3,
      #header h4,
      #header h5,
      #header h6 {
        color: #ffffff;
      }

      #header h1 {
        color: rgba(255, 255, 255, 0.5);
        font-size: 1.35em;
        line-height: 1.75em;
        margin: 0;
      }

      #header .image.avatar {
        margin: 0 0 1em 0;
        width: 6.25em;
      }

      /* Footer */

      #footer .icons {
        margin: 1em 0 0 0;
      }

      #footer .icons a {
        color: rgba(255, 255, 255, 0.4);
      }

      #footer .copyright {
        color: rgba(255, 255, 255, 0.4);
        font-size: 0.8em;
        list-style: none;
        margin: 1em 0 0 0;
        padding: 0;
      }

      #footer .copyright li {
        border-left: solid 1px rgba(255, 255, 255, 0.25);
        display: inline-block;
        line-height: 1em;
        margin-left: 0.75em;
        padding-left: 0.75em;
      }

      #footer .copyright li:first-child {
        border-left: 0;
        margin-left: 0;
        padding-left: 0;
      }

      #footer .copyright li a {
        color: inherit;
      }

      /* Main */

      #main {
        margin-left: 35%;
        max-width: 54em;
        padding: 8em 4em 4em 4em;
        width: calc(100% - 35%);
      }

      #main > section {
        border-top: solid 2px #efefef;
        margin: 4em 0 0 0;
        padding: 4em 0 0 0;
      }

      #main > section:first-child {
        border-top: 0;
        margin-top: 0;
        padding-top: 0;
      }

      /* Poptrox */

      @-moz-keyframes spin {
        0% {
          -moz-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        100% {
          -moz-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-webkit-keyframes spin {
        0% {
          -moz-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        100% {
          -moz-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-ms-keyframes spin {
        0% {
          -moz-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        100% {
          -moz-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @keyframes spin {
        0% {
          -moz-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        100% {
          -moz-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      .poptrox-popup {
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        -ms-box-sizing: content-box;
        box-sizing: content-box;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        background: #fff;
        border-radius: 0.35em;
        box-shadow: 0 0.1em 0.15em 0 rgba(0, 0, 0, 0.15);
        overflow: hidden;
        padding-bottom: 3em;
      }

      .poptrox-popup .loader {
        text-decoration: none;
        -moz-animation: spin 1s linear infinite;
        -webkit-animation: spin 1s linear infinite;
        -ms-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
        font-size: 1.5em;
        height: 1em;
        left: 50%;
        line-height: 1em;
        margin: -0.5em 0 0 -0.5em;
        position: absolute;
        top: 50%;
        width: 1em;
      }

      .poptrox-popup .loader:before {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        text-transform: none !important;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
      }

      .poptrox-popup .loader:before {
        content: "\f1ce";
      }

      .poptrox-popup .caption {
        background: #fff;
        bottom: 0;
        cursor: default;
        font-size: 0.9em;
        height: 3em;
        left: 0;
        line-height: 2.8em;
        position: absolute;
        text-align: center;
        width: 100%;
        z-index: 1;
      }

      .poptrox-popup .nav-next,
      .poptrox-popup .nav-previous {
        text-decoration: none;
        -moz-transition: opacity 0.2s ease-in-out;
        -webkit-transition: opacity 0.2s ease-in-out;
        -ms-transition: opacity 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        background: rgba(0, 0, 0, 0.01);
        cursor: pointer;
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        width: 50%;
      }

      .poptrox-popup .nav-next:before,
      .poptrox-popup .nav-previous:before {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        text-transform: none !important;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
      }

      .poptrox-popup .nav-next:before,
      .poptrox-popup .nav-previous:before {
        color: #fff;
        font-size: 2.5em;
        height: 1em;
        line-height: 1em;
        margin-top: -0.75em;
        position: absolute;
        text-align: center;
        top: 50%;
        width: 1.5em;
      }

      .poptrox-popup .nav-next {
        right: 0;
      }

      .poptrox-popup .nav-next:before {
        content: "\f105";
        right: 0;
      }

      .poptrox-popup .nav-previous {
        left: 0;
      }

      .poptrox-popup .nav-previous:before {
        content: "\f104";
        left: 0;
      }

      .poptrox-popup .closer {
        text-decoration: none;
        -moz-transition: opacity 0.2s ease-in-out;
        -webkit-transition: opacity 0.2s ease-in-out;
        -ms-transition: opacity 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        color: #fff;
        height: 4em;
        line-height: 4em;
        opacity: 0;
        position: absolute;
        right: 0;
        text-align: center;
        top: 0;
        width: 4em;
        z-index: 2;
      }

      .poptrox-popup .closer:before {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        text-transform: none !important;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
      }

      .poptrox-popup .closer:before {
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        -ms-box-sizing: content-box;
        box-sizing: content-box;
        border-radius: 100%;
        border: solid 3px rgba(255, 255, 255, 0.5);
        content: "\f00d";
        display: block;
        font-size: 1em;
        height: 1.75em;
        left: 50%;
        line-height: 1.75em;
        margin: -0.875em 0 0 -0.875em;
        position: absolute;
        top: 50%;
        width: 1.75em;
      }

      .poptrox-popup:hover .nav-next,
      .poptrox-popup:hover .nav-previous {
        opacity: 0.5;
      }

      .poptrox-popup:hover .nav-next:hover,
      .poptrox-popup:hover .nav-previous:hover {
        opacity: 1;
      }

      .poptrox-popup:hover .closer {
        opacity: 0.5;
      }

      .poptrox-popup:hover .closer:hover {
        opacity: 1;
      }

      /* Touch */

      body.is-touch .image.thumb:before {
        opacity: 0.5 !important;
      }

      body.is-touch .image.thumb:after {
        display: none !important;
      }

      body.is-touch #header {
        background-attachment: scroll;
        background-size: auto, cover;
      }

      body.is-touch .poptrox-popup .nav-next,
      body.is-touch .poptrox-popup .nav-previous,
      body.is-touch .poptrox-popup .closer {
        opacity: 1 !important;
      }

      /* XLarge */

      @media screen and (max-width: 1800px) {
        /* Basic */

        body,
        input,
        select,
        textarea {
          font-size: 12pt;
        }
      }

      /* Large */

      @media screen and (max-width: 1280px) {
        /* Header */

        #header {
          padding: 6em 3em 3em 3em;
          width: 30%;
        }

        #header h1 {
          font-size: 1.25em;
        }

        #header h1 br {
          display: none;
        }

        #header > .inner {
          margin-bottom: 0;
        }

        /* Footer */

        #footer .copyright li {
          border-left-width: 0;
          display: block;
          line-height: 2.25em;
          margin-left: 0;
          padding-left: 0;
        }

        /* Main */

        #main {
          margin-left: 30%;
          max-width: none;
          padding: 6em 3em 3em 3em;
          width: calc(100% - 30%);
        }
      }

      /* Medium */

      @media screen and (max-width: 980px) {
        /* Basic */

        h1 br,
        h2 br,
        h3 br,
        h4 br,
        h5 br,
        h6 br {
          display: none;
        }

        /* List */

        ul.icons li .icon {
          font-size: 1.25em;
        }

        /* Header */

        #header {
          background-attachment: scroll;
          background-position:
            top left,
            center center;
          background-size: auto, cover;
          left: auto;
          padding: 6em 4em;
          position: relative;
          text-align: center;
          top: auto;
          width: 100%;
          display: block;
        }

        #header h1 {
          font-size: 1.75em;
        }

        #header h1 br {
          display: inline;
        }

        /* Footer */

        #footer {
          background-attachment: scroll;
          background-color: #1f1815;
          background-image:
            url("images/overlay.png"), url("../../images/bg.jpg");
          background-position:
            top left,
            bottom center;
          background-repeat: repeat, no-repeat;
          background-size: auto, cover;
          bottom: auto;
          left: auto;
          padding: 4em 4em 6em 4em;
          position: relative;
          text-align: center;
          width: 100%;
        }

        #footer .icons {
          margin: 0 0 1em 0;
        }

        #footer .copyright {
          margin: 0 0 1em 0;
        }

        #footer .copyright li {
          border-left-width: 1px;
          display: inline-block;
          line-height: 1em;
          margin-left: 0.75em;
          padding-left: 0.75em;
        }

        /* Main */

        #main {
          margin: 0;
          padding: 6em 4em;
          width: 100%;
        }
      }

      /* Small */

      @media screen and (max-width: 736px) {
        /* Basic */

        h1 {
          font-size: 1.5em;
        }

        h2 {
          font-size: 1.2em;
        }

        h3 {
          font-size: 1em;
        }

        /* Section/Article */

        section.special,
        article.special {
          text-align: center;
        }

        header.major h2 {
          font-size: 1.35em;
        }

        /* List */

        ul.labeled-icons li {
          padding-left: 2em;
        }

        ul.labeled-icons li h3 {
          line-height: 1.75em;
        }

        /* Header */

        #header {
          padding: 2.25em 1.5em;
        }

        #header h1 {
          font-size: 1.35em;
        }

        /* Footer */

        #footer {
          padding: 2.25em 1.5em;
        }

        /* Main */

        #main {
          padding: 2.25em 1.5em 0.25em 1.5em;
        }

        #main > section {
          margin: 2.25em 0 0 0;
          padding: 2.25em 0 0 0;
        }

        /* Poptrox */

        .poptrox-popup {
          border-radius: 0;
        }

        .poptrox-popup .nav-next:before,
        .poptrox-popup .nav-previous:before {
          margin-top: -1em;
        }
      }

      /* XSmall */

      @media screen and (max-width: 480px) {
        /* Header */

        #header {
          padding: 4.5em 1.5em;
        }

        #header h1 br {
          display: none;
        }

        /* Footer */

        #footer .copyright li {
          border-left-width: 0;
          display: block;
          line-height: 2.25em;
          margin-left: 0;
          padding-left: 0;
        }
      }
    </style>
  </head>
  <body class="is-preload">
    <!-- Header -->
    <header id="header">
      <div class="inner">
        <a href="#" class="image avatar"
          ><img src="images/avatar.jpg" alt=""
        /></a>
        <h1>
          <strong>I am Strata</strong>, a super simple<br />
          responsive site template freebie<br />
          crafted by <a href="http://html5up.net">HTML5 UP</a>.
        </h1>
      </div>
    </header>

    <!-- Main -->
    <div id="main">
      <!-- One -->
      <section id="one">
        <header class="major">
          <h2>
            Ipsum lorem dolor aliquam ante commodo<br />
            magna sed accumsan arcu neque.
          </h2>
        </header>
        <p>
          Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi
          lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis
          tortor primis integer massa adipiscing id nisi accumsan pellentesque
          commodo blandit enim arcu non at amet id arcu magna. Accumsan orci
          faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque
          cubilia.
        </p>
        <ul class="actions">
          <li><a href="#" class="button">Learn More</a></li>
        </ul>
      </section>

      <!-- Two -->
      <section id="two">
        <h2>Recent Work</h2>
        <div class="row">
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls/01.jpg" class="image fit thumb"
              ><img src="images/thumbs/01.jpg" alt=""
            /></a>
            <h3>Magna sed consequat tempus</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls/02.jpg" class="image fit thumb"
              ><img src="images/thumbs/02.jpg" alt=""
            /></a>
            <h3>Ultricies lacinia interdum</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls/03.jpg" class="image fit thumb"
              ><img src="images/thumbs/03.jpg" alt=""
            /></a>
            <h3>Tortor metus commodo</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls/04.jpg" class="image fit thumb"
              ><img src="images/thumbs/04.jpg" alt=""
            /></a>
            <h3>Quam neque phasellus</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls/05.jpg" class="image fit thumb"
              ><img src="images/thumbs/05.jpg" alt=""
            /></a>
            <h3>Nunc enim commodo aliquet</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls/06.jpg" class="image fit thumb"
              ><img src="images/thumbs/06.jpg" alt=""
            /></a>
            <h3>Risus ornare lacinia</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
        </div>
        <ul class="actions">
          <li><a href="#" class="button">Full Portfolio</a></li>
        </ul>
      </section>

      <!-- Three -->
      <section id="three">
        <h2>Get In Touch</h2>
        <p>
          Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
          magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
          vulputate lorem neque lorem ipsum dolor.
        </p>
        <div class="row">
          <div class="col-8 col-12-small">
            <form method="post" action="#">
              <div class="row gtr-uniform gtr-50">
                <div class="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div class="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </form>
            <ul class="actions">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </div>
          <div class="col-4 col-12-small">
            <ul class="labeled-icons">
              <li>
                <h3 class="icon solid fa-home">
                  <span class="label">Address</span>
                </h3>
                1234 Somewhere Rd.<br />
                Nashville, TN 00000<br />
                United States
              </li>
              <li>
                <h3 class="icon solid fa-mobile-alt">
                  <span class="label">Phone</span>
                </h3>
                000-000-0000
              </li>
              <li>
                <h3 class="icon solid fa-envelope">
                  <span class="label">Email</span>
                </h3>
                <a href="#">hello@untitled.tld</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <footer id="footer">
      <div class="inner">
        <ul class="icons">
          <li>
            <a href="#" class="icon brands fa-twitter"
              ><span class="label">Twitter</span></a
            >
          </li>
          <li>
            <a href="#" class="icon brands fa-github"
              ><span class="label">Github</span></a
            >
          </li>
          <li>
            <a href="#" class="icon brands fa-dribbble"
              ><span class="label">Dribbble</span></a
            >
          </li>
          <li>
            <a href="#" class="icon solid fa-envelope"
              ><span class="label">Email</span></a
            >
          </li>
        </ul>
        <ul class="copyright">
          <li>&copy; Untitled</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </footer>

    <!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.poptrox.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
  </body>
</html>`
