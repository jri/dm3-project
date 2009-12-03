function dm3_project() {

    types["To Do"] = {
        fields: [
            {id: "Summary",  model: {type: "text"}, view: {editor: "single line"},           content: ""},
            {id: "due-date", model: {type: "date"}, view: {label: "Due Date"},               content: ""},
            {id: "Notes",    model: {type: "text"}, view: {editor: "multi line", lines: 20}, content: ""}
        ],
        implementation: "PlainDocument"
    }
}
