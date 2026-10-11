/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Language / Kieli - Use the device language (Finnish when macOS is in Finnish, otherwise English), or choose a language. Käytä laitteen kieltä tai valitse englanti tai suomi. */
  "language": "system" | "en" | "fi"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `prh-search` command */
  export type PrhSearch = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `prh-search` command */
  export type PrhSearch = {}
}

