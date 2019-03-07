"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/*
 * spurtcommerce API
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
const ejs_1 = tslib_1.__importDefault(require("ejs"));
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
const nodemailer_smtp_transport_1 = tslib_1.__importDefault(require("nodemailer-smtp-transport"));
const env_1 = require("../env");
class MAILService {
    // forget password
    static mail(emailId, firstName, password) {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/adminForgotPassword.ejs', { emailId, firstName, password }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: env_1.mail.FROM,
                        to: emailId,
                        subject: 'Changed password successfully',
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // for add customer API
    static customerLoginMail(username, email, password) {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/customerLogin.ejs', { username, email, password }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: env_1.mail.FROM,
                        to: email,
                        subject: 'User Login',
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    //  customer register
    static RegisterMail(emailId, name, password) {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/customerRegisterTemplate.ejs', { emailId, name, password }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: env_1.mail.FROM,
                        to: emailId,
                        subject: 'Registration Successfully',
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // forgot password
    static passwordForgotMail(emailId, userName, password) {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/forgotPassword.ejs', { userName, password }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: env_1.mail.FROM,
                        to: emailId,
                        subject: 'Forgot Password',
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // contact Us
    static contactMail(email, name) {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/contactTemplate.ejs', { name }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        to: env_1.mail.FROM,
                        from: email,
                        subject: 'ContactUs',
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // admin mail for check out
    static adminOrderMail(orderData, productDetailData) {
        const nowDate = new Date();
        const today = ('0' + nowDate.getDate()).slice(-2) + '.' + ('0' + (nowDate.getMonth() + 1)).slice(-2) + '.' + nowDate.getFullYear();
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/adminOrderTemplate.ejs', { orderData, today, productDetailData }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: orderData.email,
                        to: env_1.mail.FROM,
                        subject: 'Congratulations on your recent order ' + orderData.orderId,
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // customer mail for check out
    static customerOrderMail(orderData, productDetailData) {
        const nowDate = new Date();
        const today = ('0' + nowDate.getDate()).slice(-2) + '.' + ('0' + (nowDate.getMonth() + 1)).slice(-2) + '.' + nowDate.getFullYear();
        console.log(env_1.mail.PORT);
        console.log(env_1.mail.HOST);
        // console.log(mail.SECURE);
        console.log(env_1.mail.AUTH.user);
        console.log(env_1.mail.AUTH.pass);
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/customerOrderTemplate.ejs', {
                orderData,
                today,
                productDetailData,
            }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: env_1.mail.FROM,
                        to: orderData.email,
                        subject: 'Details of your recent Order ' + orderData.orderId,
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
}
exports.MAILService = MAILService;
//# sourceMappingURL=mail.services.js.map