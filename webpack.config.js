const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 设置为开发模式
  mode: "development",

  // 可选：如果你有 JS 入口文件，可以配置入口点
  // 如果只是单纯提供 HTML 服务，入口可以是一个空文件或者不需要配置
  entry: {
    main: "./src/index.js", // 可选，指向你的入口 JS 文件
  },

  output: {
    // 输出目录，通常为 dist
    path: path.resolve(__dirname, "dist"),
    // 输出文件名，[name] 对应入口的 key (例如 main)
    filename: "[name].bundle.js",
    // 清理输出目录（Webpack 5+）
    clean: true,
  },

  // 开发服务器配置
  devServer: {
    // 静态文件目录，指向你的 HTML 文件所在的文件夹
    // contentBase: path.join(__dirname, "dist"), // Webpack 5 之前用法
    // 对于 Webpack 5+，使用 static 替代 contentBase
    static: {
      directory: path.join(__dirname, "template"),
    },
    // 启用热模块替换（HMR）:cite[4]
    hot: true,
    // 自动打开浏览器
    open: false,
    // 指定端口
    port: 8080,
    // 主机名，设置为 0.0.0.0 可供外部访问:cite[4]
    host: "localhost",
    // 如果你有 API 需要代理，可以在这里配置:cite[4]
    // proxy: {
    //   '/api': {
    //     target: 'http://your-api-server.com',
    //     changeOrigin: true,
    //   }
    // }
  },

  plugins: [
    // 如果你的 HTML 需要自动引入打包后的 JS（如果你有入口的话）
    // 如果没有 JS 入口，只是想服务 HTML 文件，这个插件可以省略，或者用于生成 HTML
    new HtmlWebpackPlugin({
      template: "./template/default.html", // 指定你的 HTML 模板文件路径
      filename: "index.html", // 输出文件名，默认也是 index.html
      // chunks: ['main'], // 指定要注入的 chunk（对应入口的 key），可选
    }),
    // 可以为多个 HTML 页面配置多个 HtmlWebpackPlugin 实例:cite[2]
    // new HtmlWebpackPlugin({
    //   template: './dist/other-page.html',
    //   filename: 'other-page.html',
    //   // chunks: ['other-entry'], // 如果需要为不同页面注入不同的 JS
    // }),
  ],

  // 可选：模块处理规则（例如处理 CSS、图片等）
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      // ... 其他 loader 规则
    ],
  },
};
