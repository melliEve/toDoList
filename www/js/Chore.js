class Chore extends Component {

  constructor(name, chorePage){
    super();
    this.addEvents({
      'click .remove-btn': 'removeMe',
      'click .up-btn': 'moveUp',
      'click .down-btn': 'moveDown',

    });
    this.name = name;
    this.chorePage = chorePage;
    this.chore = []
  }

  removeMe(){
    // call removeChore in my chorePage
    // and tell it to remove me
    this.chorePage.removeChore(this);
  }

  moveUp(){
    this.chorePage.moveUpChore(this);
  }

  moveDown(){
    this.chorePage.moveDownChore(this);
  }
}