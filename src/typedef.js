/**
 * @typedef {{
 *   type: 'Array',
 *   expanded: boolean?,
 *   props: Array.<{name: string, value: JSONData}>?
 * }} ObjectData
 *
 * @typedef {{
 *   type: 'Object',
 *   expanded: boolean?,
 *   items: JSONData[]?
 * }} ArrayData
 *
 * @typedef {{
 *   type: 'value' | 'string',
 *   value: *?
 * }} ValueData
 *
 * @typedef {Array.<string>} Path
 *
 * @typedef {ObjectData | ArrayData | ValueData} JSONData
 *
 * @typedef {'Object' | 'Array' | 'value' | 'string'} JSONDataType
 *
 * @typedef {Array.<{op: string, path?: string, from?: string, value?: *}>} JSONPatch
 *
 * @typedef {{
 *   patch: JSONPatch,
 *   revert: JSONPatch,
 *   error: null | Error
 * }} JSONPatchResult
 *
 * @typedef {{
 *   dataPath: string,
 *   message: string
 * }} JSONSchemaError
 *
 * @typedef {{
 *   name: string?,
 *   mode: 'code' | 'form' | 'text' | 'tree' | 'view'?,
 *   modes: string[]?,
 *   history: boolean?,
 *   indentation: number | string?,
 *   onChange: function (patch: JSONPatch, revert: JSONPatch)?,
 *   onChangeText: function ()?,
 *   onChangeMode: function (mode: string, prevMode: string)?,
 *   onError:  function (err: Error)?,
 *   isPropertyEditable: function (Path)?
 *   isValueEditable: function (Path)?,
 *   escapeUnicode: boolean?,
 *   ajv: Object?
 *   ace: Object?
 * }} Options
 *
 * @typedef {{
 *   expand: function (path: Path)?
 * }} SetOptions
 *
 * @typedef {{
 *   expand: function (path: Path)?
 * }} PatchOptions
 *
 * @typedef {{
 *   dataPath: Path,
 *   property: boolean?,
 *   value: boolean?
 * }} SearchResult
 * // TODO: SearchResult.dataPath is an array, JSONSchemaError.dataPath is a string -> make this consistent
 */