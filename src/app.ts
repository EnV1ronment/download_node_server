import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import { IRequest, IResponse, IError } from './types/interface';

var logger = require('morgan');


var app = express();

// 设置全局根目录，方便绝对路径使用
(process as any)._rootDir = __dirname;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req: IRequest, res: IResponse, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: IError, req: IRequest, res: IResponse) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

// Export express instance
export default app;
