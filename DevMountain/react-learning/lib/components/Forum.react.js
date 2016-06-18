/**
 * Created by cjpowers on 6/16/16.
 */
var Forum = React.createClass({
    displayName: "Forum",


    getInitialState: function () {

        return {
            allAnswers: {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "A tool and methodology for building the front end of web applications",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for respond",
                    correct: false
                }
            }
        };
    },

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(ForumHeader, null),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(ForumQuestion, null),
                React.createElement("hr", null),
                React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
                React.createElement("hr", null),
                React.createElement(
                    "h4",
                    null,
                    "Add an answer"
                ),
                React.createElement(ForumAddAnswerBox, null)
            )
        );

        // React.createElement(
        //     'div',
        //     null,
        //     React.createElement(
        //         ForumHeader,
        //         {allAnswers: this.state.allAnswers}
        //     )
        //
        // );
    }
});