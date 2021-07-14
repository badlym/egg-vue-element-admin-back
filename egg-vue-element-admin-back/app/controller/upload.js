'use strict';

const Controller = require('egg').Controller;
// const fs = require('fs');
const path = require('path');
class uploadController extends Controller {
  async index() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    // const extname = path.extname(stream.filename).toLowerCase(); // 文件扩展名称
    const filename = path.basename(stream.filename); // 文件名称
    const result = await ctx.oss.put(filename, stream);
    console.log(filename);
    ctx.body = {
      code: 0,
      msg: '上传成功',
      data: {
        url: result.url,
      },
    };
  }
}
module.exports = uploadController;
