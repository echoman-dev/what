let nickColor = "user", channelName, provider;
let hideAfter = 60;
let hideCommands = "no";
let ignoredUsers = [];
const colors = [ "#c8f7c5", "#7fffd4", "#baf73c", "#98fb98", "#00ff7f", "#90ee90", "#00ff00", "#00fa9a", "#38f689", "#a2ded0", "#3cf73c", "#abe338", "#86e2d5", "#4ae08c", "#4add8c", "#87d37c", "#6ad4b1", "#9acd32", "#36d7b7", "#7ed07e", "#90c695", "#4ecdc4", "#66cc99", "#65c6bb", "#00d46a", "#2eccb0", "#00d400", "#00cf80", "#2ecc91", "#68c3a3", "#76c376", "#2ecc71", "#03c9a9", "#32cd32", "#2ecc51", "#2ecc32", "#3fc380", "#8bb82d", "#26c281", "#1bbc9b", "#2abb9b", "#3cb572", "#3cb371", "#4daf7c", "#55aa8d", "#00b16a", "#65a665", "#7aa228", "#00aa55", "#1ba39c", "#03a678", "#00aa00", "#26a65b", "#00a566", "#16a085", "#5d995d", "#24a159", "#28a228", "#019875", "#6b8e23", "#049372", "#008b8b", "#2e8b57", "#2e8856", "#40806a", "#e0ffff", "#e4f1fe", "#c5eff7", "#00ffff", "#00f8fb", "#add8e6", "#bbd4d4", "#00e0e0", "#34dbdb", "#81cfe0", "#89c4f4", "#00d4d4", "#00ced1", "#6bb9f0", "#00bfff", "#8db0bb", "#34b9db", "#95aaaa", "#19b5fe", "#52b3d9", "#59abe3", "#00b5b5", "#22a7f0", "#00aaaa", "#6495ed", "#009fd4", "#00a4a6", "#5c97bf", "#3498db", "#1e90ff", "#638bb3", "#6d8891", "#1e8bc3", "#4183d7", "#67809f", "#527ac2", "#3477db", "#4b77be", "#1978d4", "#007faa", "#2a7ab0", "#ffecdb", "#dcc6e0", "#f1a9a0", "#dda0dd", "#aea8d3", "#be90d4", "#e08283", "#fc6399", "#b381b3", "#e26a6a", "#bf6ee0", "#ff00ff", "#bf55ec", "#d252b2", "#9370db", "#d25299", "#d25852", "#d2527f", "#e73c70", "#f62459", "#d25265", "#e000e0", "#b659ac", "#ae59b6", "#b93cf6", "#d400d4", "#9b59b6", "#7462e0", "#ffffff", "#fefefe", "#f2f1ef", "#ecf0f1", "#eeeeee", "#ececec", "#e8e8e8", "#dadfe1", "#d2d7d3", "#d5d5d5", "#d4d4d4", "#d3d3d3", "#b2cce5", "#bdc3c7", "#bfbfbf", "#bebebe", "#abb7b7", "#aaaaaa", "#a9a9a9", "#7bacdd", "#91a6ba", "#95a5a6", "#939393", "#808080", "#7e7e7e", "#708090", "#708080", "#6c7a89", "#fffacd", "#f1f227", "#c9f227", "#ffd700", "#f5d76e", "#f4d03f", "#f7ca18", "#d4d0ab", "#f2ca27", "#d4b300", "#f2a127", "#e2a50e", "#daa520", "#c7a720", "#aaa789", "#f27927", "#aa8f00", "#b8860b", "#af851a", "#9d8319", "#807d67", "#fde3a7", "#e6cc22", "#f9bf3b", "#f4b350", "#f5ab35", "#ffa07a", "#f4a460", "#e6a522", "#f39c12", "#f89406", "#eb974e", "#ff8c00", "#eb9532", "#ff7f50", "#f2784b", "#f27935", "#e87e04", "#e67e22", "#d48566", "#c9874f", "#f9690e", "#d47500", "#ff4500", "#d46a43", "#e65722", "#bb671c", "#d35400", "#aa6b51", "#e63022", "#9f6b3f", "#e7903c", "#ff6347", "#e76e3c", "#f64747", "#ef4836", "#e74c3c", "#d4533b", "#e73c4e", "#ff0000", "#d24d57", "#f22613", "#d64541"];
window.addEventListener('onEventReceived', function (obj) {
    if (obj.detail.event.listener === 'widget-button') {

        if (obj.detail.event.field === 'testMessage') {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    listener: "message", event: {
                        service: "twitch",
                        data: {
                            time: Date.now(),
                            tags: {
                                "badge-info": "",
                                badges: "moderator/1,partner/1",
                                color: "#5B99FF",
                                "display-name": "StreamElements",
                                emotes: "25:46-50",
                                flags: "",
                                id: "43285909-412c-4eee-b80d-89f72ba53142",
                                mod: "1",
                                "room-id": "85827806",
                                subscriber: "0",
                                "tmi-sent-ts": "1579444549265",
                                turbo: "0",
                                "user-id": "100135110",
                                "user-type": "mod"
                            },
                            nick: channelName,
                            userId: "100135110",
                            displayName: channelName,
                            displayColor: "#5B99FF",
                            badges: [{
                                type: "moderator",
                                version: "1",
                                url: "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                                description: "Moderator"
                            }, {
                                type: "partner",
                                version: "1",
                                url: "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
                                description: "Verified"
                            }],
                            channel: channelName,
                            text: "Howdy! My name is Bill and I am here to serve Kappa",
                            isAction: !1,
                            emotes: [{
                                type: "twitch",
                                name: "Kappa",
                                id: "25",
                                gif: !1,
                                urls: {
                                    1: "https://static-cdn.jtvnw.net/emoticons/v1/25/1.0",
                                    2: "https://static-cdn.jtvnw.net/emoticons/v1/25/1.0",
                                    4: "https://static-cdn.jtvnw.net/emoticons/v1/25/3.0"
                                },
                                start: 46,
                                end: 50
                            }],
                            msgId: "43285909-412c-4eee-b80d-89f72ba53142"
                        },
                        renderedText: 'Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">'
                    }
                }
            });
            window.dispatchEvent(emulated);
        }
        return;
    }
    if (obj.detail.listener === "delete-message") {
        const msgId = obj.detail.event.msgId;
        $(`[data-msgid=${msgId}]`).remove();
        return;
    } else if (obj.detail.listener === "delete-messages") {
        const sender = obj.detail.event.userId;
        $(`.message-row[data-sender=${sender}]`).remove();
        return;
    }

    if (obj.detail.listener !== "message") return;
    let data = obj.detail.event.data;
    if (data.text.startsWith("!") && hideCommands === "yes") return;
    if (ignoredUsers.indexOf(data.nick) !== -1) return;
    let message = attachEmotes(data);
    let badges = "", badge;
    if (provider === 'mixer') {
        data.badges.push({url: data.avatar});
    }
    for (let i = 0; i < data.badges.length; i++) {
        badge = data.badges[i];
        badges += `<img alt="" src="${badge.url}" class="badge ${badge.type}-icon"> `;
    }
    const username = `<span>${data.displayName}:</span>`;
    addMessage(username, badges, message, data);
});

window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj.detail.fieldData;
    animationIn = fieldData.animationIn;
    animationOut = fieldData.animationOut;
    hideAfter = fieldData.hideAfter;
    messagesLimit = fieldData.messagesLimit;
    nickColor = fieldData.nickColor;
    hideCommands = fieldData.hideCommands;
    channelName = obj.detail.channel.username;
    fetch('https://api.streamelements.com/kappa/v2/channels/' + obj.detail.channel.id + '/').then(response => response.json()).then((profile) => {
        provider = profile.provider;
    });

    ignoredUsers = fieldData.ignoredUsers.toLowerCase().replace(" ", "").split(",");
});


function attachEmotes(message) {
    let text = html_encode(message.text);
    let data = message.emotes;
    if (typeof message.attachment !== "undefined") {
        if (typeof message.attachment.media !== "undefined") {
            if (typeof message.attachment.media.image !== "undefined") {
                text = `${message.text}<img src="${message.attachment.media.image.src}">`;
            }
        }
    }
    return text
        .replace(
            /([^\s]*)/gi,
            function (m, key) {
                let result = data.filter(emote => {
                    return html_encode(emote.name) === key
                });
                if (typeof result[0] !== "undefined") {
                    let url = result[0]['urls'][1];
                    if (provider === "twitch") {
                        return `<img class="emote" " src="${url}"/>`;
                    } else {
                        if (typeof result[0].coords === "undefined") {
                            result[0].coords = {x: 0, y: 0};
                        }
                        let x = parseInt(result[0].coords.x);
                        let y = parseInt(result[0].coords.y);

                        let width = "{emoteSize}px";
                        let height = "auto";

                        if (provider === "mixer") {
                            console.log(result[0]);
                            if (result[0].coords.width) {
                                width = `${result[0].coords.width}px`;
                            }
                            if (result[0].coords.height) {
                                height = `${result[0].coords.height}px`;
                            }
                        }
                        return `<div class="emote" style="width: ${width}; height:${height}; display: inline-block; background-image: url(${url}); background-position: -${x}px -${y}px;"></div>`;
                    }
                } else return key;

            }
        );
}

function html_encode(e) {
    const element = document.createElement('div');
    element.innerText = e;
    return element.innerHTML;
}

function addMessage(username, badges, message, data) {
    const {isAction, uid, msgId} = data;
    let actionClass = "";
    if (isAction) {
        actionClass = "action";
    }
    let color;
    if (nickColor === 'remove') {
       username = '';
       color = 'white';
    } else if (nickColor === 'user') {
        color = data.displayColor !== "" ? data.displayColor : "#" + (md5(username).slice(26));
    } else {
    	color = colors[Math.floor(Math.random() * colors.length)];
    }
    const offset = Math.round(Math.random() * 100, 0);

    const element = $.parseHTML(`
    <div data-sender="${uid}" data-msgid="${msgId}" class="message-row animated" style="color:${color};top:${offset}%;">
        <div class="user-box ${actionClass}">${badges}${username}</div>
        <div class="user-message ${actionClass}">${message}</div>
    </div>`);

    $(element).appendTo('.main-container').delay(hideAfter * 1000).queue(function () {
        $(this).delay(1000).queue(function () {
            $(this).remove()
        }).dequeue();
    });
}