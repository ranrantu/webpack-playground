# PrefetchPlugin

预取出普通的模块请求(module request)，可以让这些模块在他们被 import 或者是 require 之前就解析并且编译。使用这个预取插件可以提升性能。可以多试试在编译前记录时间(profile)来决定最佳的预取的节点。

### 使用

```js
new webpack.PrefetchPlugin([context], request);
```

### 选项

- ```context``` 文件夹的绝对路径
- ```request``` 普通模块的 request 字符串

# ProfilingPlugin

生成Chrome描述文件，其中包含插件执行的时间。默认情况下输出events.json文件。可以使用outputPath选项提供自定义文件路径。

### 选项

- ```outputPath``` 一个相对路径保存自定义的输出文件

### 使用

```js
new webpack.debug.ProfilingPlugin();
```

自定义输出文件

```js
new webpack.debug.ProfilingPlugin({
  outputPath: 'profiling/profileEvents.json'
});
```

# ProgressPlugin

ProgressPlugin提供了一种在编译期间自定义报告进度的方法。

### 使用

创建ProgressPlugin实例，当报告进度时将调用该钩子函数：

```js
const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

new webpack.ProgressPlugin(handler);
```

- ```handler``` 钩子函数
- ```percentage``` 一个介于0~1之间的值表示编译执行的进度百分比
- ```message``` 一个当前执行进度的简短描述
- ```...args``` 空或多个描述当前进度的附加字符串

# ProvidePlugin

自动加载模块，而不必到处 import 或 require 。

```js
new webpack.ProvidePlugin({
  identifier: 'module1',
  // ...
});
```
或
```js
new webpack.ProvidePlugin({
  identifier: ['module1', 'property1'],
  // ...
});
```

任何时候，当 identifier 被当作未赋值的变量时，module 就会自动被加载，并且 identifier 会被这个 module 输出的内容所赋值。（模块的 property 用于支持命名导出(named export)）。

> 对于 ES2015 模块的 default export，你必须指定模块的 default 属性。

### 使用：jQuery

要自动加载 jquery，我们可以将两个变量都指向对应的 node 模块：

```js
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});
```

然后在我们任意源码中：

```js
// in a module
$('#item'); // <= 起作用
jQuery('#item'); // <= 起作用
// $ 自动被设置为 "jquery" 输出的内容
```

### 使用：jQuery 和 Angular 1 

```js
new webpack.ProvidePlugin({
  'window.jQuery': 'jquery'
});
```

### 使用：Lodash Map

```js
new webpack.ProvidePlugin({
  _map: ['lodash', 'map']
});
```

### 使用：Vue.js

```js
new webpack.ProvidePlugin({
  Vue: ['vue/dist/vue.esm.js', 'default']
});
```

# SourceMapDevToolPlugin

本插件实现了对 source map 生成，进行更细粒度的控制。它可以替代 devtool 选项。

```js
new webpack.SourceMapDevToolPlugin(options);
```

### 选项

- ```test(string|regex|array)``` 包含基于扩展名的模块的 source map（默认是 .js 和 .css）
- ```include(string|regex|array)``` 使路径与该值匹配的模块生成 source map
- 

### 使用

### 排除 vendor 的 map

以下代码会排除 vendor.js 内模块的 source map。

```js
new webpack.SourceMapDevToolPlugin({
  filename: '[name].js.map',
  exclude: ['vendor.js']
});
```

### 在宿主环境外部化 source map

设置 source map 的 URL。在宿主环境需要授权的情况下很有用。

```js
new webpack.SourceMapDevToolPlugin({
  append: '\n//# sourceMappingURL=http://example.com/sourcemap/[url]',
  filename: '[name].map'
});
```

还有一种场景，source map 存储在上层目录中时：

```js
project
|- dist
  |- public
    |- bundle-[hash].js
  |- sourcemaps
    |- bundle-[hash].js.map
```

如下设置：

```js
new webpack.SourceMapDevToolPlugin({
  filename: 'sourcemaps/[file].map',
  publicPath: 'https://example.com/project/',
  fileContext: 'public'
});
```

将会生成以下 URL：

```js
https://example.com/project/sourcemaps/bundle-[hash].js.map
```




















