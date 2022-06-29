const welcomeEmailTemplate = (user) => {
  const html = `
  <!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        #outlook a {
            padding: 0;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass * {
            line-height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        p {
            display: block;
            margin: 13px 0;
        }
    </style>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
        @import url(https://fonts.googleapis.com/css?family=Cabin:400,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
        @media only screen and (min-width:480px) {
            .mj-column-per-100 {
                width: 100% !important;
                max-width: 100%;
            }
        }
    </style>
    <style type="text/css">
        @media only screen and (max-width:480px) {
            table.full-width-mobile {
                width: 100% !important;
            }

            td.full-width-mobile {
                width: auto !important;
            }
        }
    </style>
    <style type="text/css">
        .hide_on_mobile {
            display: none !important;
        }

        @media only screen and (min-width: 480px) {
            .hide_on_mobile {
                display: block !important;
            }
        }

        .hide_section_on_mobile {
            display: none !important;
        }

        @media only screen and (min-width: 480px) {
            .hide_section_on_mobile {
                display: table !important;
            }
        }

        .hide_on_desktop {
            display: block !important;
        }

        @media only screen and (min-width: 480px) {
            .hide_on_desktop {
                display: none !important;
            }
        }

        .hide_section_on_desktop {
            display: table !important;
        }

        @media only screen and (min-width: 480px) {
            .hide_section_on_desktop {
                display: none !important;
            }
        }

        [owa] .mj-column-per-100 {
            width: 100% !important;
        }

        [owa] .mj-column-per-50 {
            width: 50% !important;
        }

        [owa] .mj-column-per-33 {
            width: 33.333333333333336% !important;
        }

        p,
        h1,
        h2,
        h3 {
            margin: 0px;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        @media only print and (min-width:480px) {
            .mj-column-per-100 {
                width: 100% !important;
            }

            .mj-column-per-40 {
                width: 40% !important;
            }

            .mj-column-per-60 {
                width: 60% !important;
            }

            .mj-column-per-50 {
                width: 50% !important;
            }

            mj-column-per-33 {
                width: 33.333333333333336% !important;
            }
        }
    </style>
</head>

<body style="background-color:#52c0f7;">
    <div style="background-color:#52c0f7;">
        <div style="Margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;vertical-align:top;">
                            <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="font-size:0px;word-break:break-word;">
                                                <div style="height:50px;" class="esd-text"> &nbsp; </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style="background:#FFFFFF;background-color:#FFFFFF;Margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
                <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;vertical-align:top;">
                            <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="font-size:0px;word-break:break-word;">
                                                <div style="height:30px;" class="esd-text"> &nbsp; </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="width:312px;"><img height="auto" src="https://s3-eu-west-1.amazonaws.com/topolio/uploads/6082338c1a7ee/1619145692.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="312" alt></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size:0px;word-break:break-word;">
                                                <div style="height:50px;" class="esd-text"> &nbsp; </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                                                <div style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;" align="center" class="esd-text">
                                                    <p style="font-size: 24px;"><b>ONG GROUP 227</b><br><br></p>
                                                    <p><img src="https://fundeu.do/wp-content/uploads/2017/07/siglas1.jpg" width="200" alt></p>
                                                    <p style="font-size: 16px; margin-top: 16px;">Bienvenido ${user}, ahora eres parte de nuestra comunidad.</p>
                                                    <p style="font-size: 16px; color: #ff0000; margin-top: 16px;"><u>CONFIRMA TU EMAIL AQUI!</u></p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size:0px;word-break:break-word;">
                                                <div style="height:30px;" class="esd-text"><br></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;" class="esd-text">
                                                    <p style="font-size: 18px;">Datos de contacto de ONG Group 227:</p>
                                                    <p style="font-size: 15px;">Equipo de soporte: ong.group227@sup port.com</p>
                                                    <p style="font-size: 15px;">Atención al cliente: ong.group227@customersupport.com</p>
                                                    <p style="font-size: 15px;">Ventas: ong.group227@sales.com</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size:0px;word-break:break-word;">
                                                <div style="height:30px;" class="esd-text"><br></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style="Margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;vertical-align:top;">
                            <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td style="font-size:0px;word-break:break-word;">
                                                <div style="height:50px;" class="esd-text"> &nbsp; </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
  `

  return html;
}

module.exports = welcomeEmailTemplate;