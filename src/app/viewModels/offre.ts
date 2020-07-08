export class Offre {
  constructor(
    public image: String,
    public tag: String,
    public  nom: String,
    public  price: Number,
    public  description: String,
    public date_debut : Date,
    public date_fin : Date,
    public is_new : Boolean
    ){

    }
}
