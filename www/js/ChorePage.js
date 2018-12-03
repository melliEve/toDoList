class ChorePage extends Component {

  constructor(){
    super();
    this.addRoute('/chores', 'Chores');
    this.addEvents({
      'click .add-btn': 'addChore',
      'keyup .chore-name': 'addChoreOnEnter' 
    });
    // an array to store chores in
    this.chores = [
      new Chore('clean', this),
      new Chore('tidy', this),
      new Chore('sleep', this)
    ];
  }

  addChore(){
    let name = this.baseEl.find('.chore-name').val();
    this.chores.push(new Chore(name, this));
    this.render();
    this.baseEl.find('.chore-name').focus();
  }

  addChoreOnEnter(e){
    if(e.which === 13){
      this.addChore();
    }
  }
  moveUpChore(chore){
    let index = this.chores.indexOf(chore);
    if(index < 1){ 'disabled'; }
    this.render();
  }

  moveDownChore(chore){
    let index = this.chores.indexOf(chore);
    if(index < 1){ 'disabled'; }
    this.render();
  }

  removeChore(chore){
    let index = this.chores.indexOf(chore);
    if(index < 0){ return; }
    this.chores.splice(index, 1);
    this.render();
  }
}