// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BasesController {

    async index({ view }){
        return view.render('admin.dashboard.index')
    }

}
