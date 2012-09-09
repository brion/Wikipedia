(function () {
    "use strict";
    var app = WinJS.Application;

    var shareOp;

    app.onactivated = function (eventObject) {
        var detail = eventObject.detail;
        var activate = new WinJS.Promise(function (complete, err, prog) {
            WinJS.UI.processAll().then(function () {
                if (detail.kind === Windows.ApplicationModel.Activation.ActivationKind.shareTarget) {
                    shareOp = detail.shareOperation;
                    WinJS.Application.queueEvent({ type: "shareready" });
                }
                complete();
            });
        });
        eventObject.setPromise(activate);
    };

    app.addEventListener('shareready', function () {
        shareOp.data.getTextAsync().done(function (text) {
            document.getElementById('content').innerText = text;
            // Open ourselves up in the main window.
            // todo: display matches in the share target window first?
            var url = 'wikipedia:?search=' + encodeURIComponent(text);
            var uri = new Windows.Foundation.Uri(url);
            Windows.System.Launcher.launchUriAsync(uri);
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('complete').addEventListener('click', function () {
            shareOp.reportCompleted();
        });
    });

    app.start();
})();
