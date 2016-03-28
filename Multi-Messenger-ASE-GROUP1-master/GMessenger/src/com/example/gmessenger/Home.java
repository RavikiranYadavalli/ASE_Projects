package com.example.gmessenger;

import java.util.ArrayList;
import java.util.List;

import android.R.layout;
import android.app.ActionBar;
import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class Home extends Activity {

	ArrayAdapter<String> adapter;
	ListView l;
	String a[];
	String b[];
	private String[] combo;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_home);
		ActionBar actionBar = getActionBar();
		actionBar.setBackgroundDrawable(new ColorDrawable(Color.BLUE));
		
		l=(ListView) findViewById(R.id.chatlist);

		   List<SMSData> smsList=new ArrayList<SMSData>();
			
			Uri uri = Uri.parse("content://sms/inbox");
			Cursor c= getContentResolver().query(uri, null, null ,null,null);
			startManagingCursor(c);
			a=new String[c.getCount()];
			b=new String[c.getCount()];
			combo=new String[c.getCount()];
			// Read the sms data and store it in the list
			if(c.moveToFirst()) {
				for(int i=0; i < c.getCount(); i++) {
					
					a[i]=c.getString(c.getColumnIndexOrThrow("body")).toString();
					b[i]=c.getString(c.getColumnIndexOrThrow("address")).toString();
					combo[i]=a[i]+"\n"+b[i];
					
					c.moveToNext();
				}
			}
			c.close();
			
			
			
			// Set smsList in the ListAdapter
			 adapter = new ArrayAdapter<String>(getApplicationContext(), R.layout.textviewxml, combo);
				l.setAdapter(adapter);
		
		 
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.home, menu);
		
		 MenuInflater inflater = getMenuInflater();
		    inflater.inflate(R.menu.home_actions, menu);
		    return super.onCreateOptionsMenu(menu);
		
		
		
		
		
		
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		
		switch (item.getItemId()) {
        case R.id.action_search:
            //openSearch();
            return true;
        case R.id.action_add:
        	Intent i=new Intent(getBaseContext(), Accounts.class);
        	startActivity(i);
        	return true;
       
        default:
            return super.onOptionsItemSelected(item);
    }
		
	}
}
