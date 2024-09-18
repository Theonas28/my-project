$(document).ready(function() {
    // Add a new task when the form is submitted
    $('#todoForm').on('submit', function(event) {
        event.preventDefault();

        let task = $('#todoInput').val(); // Get the value of the input field

        if (task) {
            // Add the task to the list
            $('#todoList').append(`
                <li>
                    ${task} 
                    <button class="delete">Delete</button>
                </li>
            `);

            $('#todoInput').val(''); // Clear the input field
        }
    });

    // Remove a task when the delete button is clicked
    $('#todoList').on('click', '.delete', function() {
        $(this).parent().remove(); // Remove the task
    });
});
