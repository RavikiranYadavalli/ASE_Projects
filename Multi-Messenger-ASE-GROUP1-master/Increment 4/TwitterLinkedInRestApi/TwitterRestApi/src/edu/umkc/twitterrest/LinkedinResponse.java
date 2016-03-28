package edu.umkc.twitterrest;

import java.io.Console;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.logging.ConsoleHandler;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.PostMethod;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONTokener;


@WebServlet("/linkedinresponse")
public class LinkedinResponse extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String accessToken = null;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//System.out.println("Inside doGet of LinkedinResponse method");

		
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "GET");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Access-Control-Max-Age", "86400");
		
		//Extract code from request
		//response.getWriter().write(request.getParameter("code"));
		String code = request.getParameter("code");
		System.out.println("code::"+code);
       
        log(code);
        
		//Request for access token
		accessToken = "https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code"
				+ "&code="+code+"&redirect_uri=http://twitterrestapi1.mybluemix.net/linkedinresponse&client_id=77qpmjv0fpfsmq&client_secret=oUkFsz7iJKb2e7SW";

		HttpClient httpclient = new HttpClient(); 
		PostMethod post = new PostMethod(accessToken);

		try {

			httpclient.executeMethod(post);
			try {
				JSONObject authResponse = new JSONObject(
						new JSONTokener(new InputStreamReader(
								post.getResponseBodyAsStream())));
				System.out.println("Auth response: "
			                                 + authResponse.toString(2));

				accessToken = authResponse.getString("access_token");
				System.out.println("Got access token: " + accessToken);
				//response.getWriter().write(accessToken);
				
				// mongodb
				
				//response.getWriter().write(docs.toArray().toString());
				JSONObject obj=new JSONObject();
				obj.put("access_token", accessToken);
				response.getWriter().write("<html><p id='myP'>"+accessToken+"</p></html>");
				response.setHeader("Access-Control-Allow-Origin", "*");
				response.setHeader("Access-Control-Allow-Methods", "GET");
				response.setHeader("Access-Control-Allow-Headers", "Content-Type");
				response.setHeader("Access-Control-Max-Age", "86400");

			} catch (JSONException e) {
				e.printStackTrace();
				throw new ServletException(e);

			}

		} finally {

			post.releaseConnection();
		}

				
		
	}
}