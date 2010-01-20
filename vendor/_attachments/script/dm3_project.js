function dm3_project() {

    add_topic_type("To Do", {
        fields: [
            {id: "Summary",  model: {type: "text"}, view: {editor: "single line"},           content: ""},
            {id: "due-date", model: {type: "date"}, view: {label: "Due Date"},               content: ""},
            {id: "Notes",    model: {type: "html"}, view: {editor: "multi line", lines: 20}, content: ""}
        ],
        implementation: "PlainDocument"
    })
}
