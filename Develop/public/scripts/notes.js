// $(".save-note").on("click", function(event) {
//     event.preventDefault();

//     let newNote = {
//         noteTitle: $(".note-title").val().trim(),
//         noteBody: $(".note-textarea").val().trim(),
//     };

//     console.log(newNote);

//     $.post("/api/notes", newNote,
//         function(data) {
//             if (data.noteCreated) {
//                 alert("Saving..");
//             }
//             $(".note-title").val("");
//             $(".note-textarea").val("");
//         });
// });

// $(".new-note").on("click", function(event) {
//     event.preventDefault();

//     $(".note-title").val("");
//     $(".note-textarea").val("");
// })

// $(".delete-note").on("click", function(event) {
//     event.preventDefault();
//     console.log("hi");
// })