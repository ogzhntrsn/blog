// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {

    async login_index({ view }){
        return view.render('admin/login')
    }

}
