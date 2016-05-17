function NotesApplication(author){
	this.author = author;
	this.note = [];
	var initialized = false;
	
	return{
        init: function() {
            if (initialized) {
                return;
            }
		initialized = true;
	},
	
	create: function(note_content){
		if(note_content != ""){
			this.note.push(note_content);
			console.log("New Note Content created Successfully");
		}
		else{
			console.log("Please Add some note!")
		}
	},

	
	
}
