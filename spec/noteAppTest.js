//some test cases for NotesApplication.js
 'use strict';
 
var noteApp;

// test for creating new objects

describe("NotesApplication", function(){
	beforeEach(function() {
		  noteApp = new NotesApplication('Kamil');
	});

	it("should initialize an empyt array, note", function(){
		expect(noteApp.note).toEqual([]);
	});

	it("should have author Kamil", function(){
		expect(noteApp.author).toEqual("Kamil");
	});

	
});

// test for create method 

describe("NotesApplication create function", function(){

	beforeEach(function() {
		 noteApp = new NotesApplication('Kamil');
		 noteApp.create('First Note');
	});

	it('First note successfully created as first index', function(){
		expect(noteApp.note[0]).toEqual('First Note');
	});

	it('does not allows empty note to be created', function(){
		expect(noteApp.create('')).toEqual('note content can not be empty!');
	});

	it('assign last item in the note array to note content', function(){
		noteApp.create('Second Note');
		expect(noteApp.note[noteApp.note.length - 1]).toEqual('Second Note');
	});

});


// test for delete method 

describe("NotesApplication create function", function(){

	beforeEach(function() {
		 noteApp = new NotesApplication('Kamil');
		 noteApp.delete('note id');
	});

	it('First note successfully created as first index', function(){
		expect(noteApp.[0]).toEqual('First Note');
	});

	it('does not allows empty note to be created', function(){
		expect(noteApp.delete('')).toEqual('note content can not be empty!');
	});

	it('assign last item in the note array to note content', function(){
		noteApp.create('Second Note');
		expect(noteApp.note[noteApp.note.length - 1]).toEqual('Second Note');
	});

});