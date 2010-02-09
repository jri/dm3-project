function dm3_project() {

    add_topic_type("To Do", {
        fields: [
            {id: "Summary",  model: {type: "text"}, view: {editor: "single line"},           content: ""},
            {id: "due-date", model: {type: "date"}, view: {label: "Due Date"},               content: ""},
            {id: "Notes",    model: {type: "html"}, view: {editor: "multi line", lines: 20}, content: ""}
        ],
        view: {
            icon_src: "vendor/dm3-project/images/shovel.png"
        },
        implementation: "PlainDocument"
    })
}
