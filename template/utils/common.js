export function initShader(gl, vertexSource, fragmentSource) {
	// 创建顶点着色器对象
	const vertexShader = gl.createShader(gl.VERTEX_SHADER); // gl.VERTEX_SHADER
	// 创建片元着色器对象
	const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); // gl.FRAGMENT_SHADER

	// 引入顶点、片元着色器源码
	gl.shaderSource(vertexShader, vertexSource);
	gl.shaderSource(fragmentShader, fragmentSource);

	// 编译顶点、片元着色器
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);

	// 创建程序对象 program
	const program = gl.createProgram();

	// 附着顶点着色器和片元着色器到 program
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);

	// 链接program
	gl.linkProgram(program);

	//使用
	gl.useProgram(program);

	console.log("program is used");

	return program;
}
