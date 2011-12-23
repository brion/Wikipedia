package org.wikipedia;

import org.json.JSONArray;

import android.util.Log;
import android.view.View;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;
import com.phonegap.api.PluginResult.Status;

public class FocusPlugin extends Plugin {

	@Override
	public PluginResult execute(String action, JSONArray params,
			String callbackId) {
		PluginResult result = null;
		if (action.compareTo("setFocus") == 0) {
			setFocus();
			result = new PluginResult(Status.NO_RESULT);
			return result;
		}
		return result;
	}

	@Override
	public boolean isSynch(String action) {
		return true;
	}

	public void setFocus() {
		Log.d("FocusPlugin", "setFocus called");
		webView.requestFocus(View.FOCUS_DOWN);
	}
}
