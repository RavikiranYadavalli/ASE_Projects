package edu.umkc.twitterrest;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jettison.json.JSONObject;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;


@WebServlet("/linkedin")
public class LogonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "GET");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Access-Control-Max-Age", "86400");
		System.out.println("Inside doGet of ClientServlet");
		String authUrl = null;
		try{
			authUrl = "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=77qpmjv0fpfsmq&scope=r_basicprofile"
					+ "&state=DCEeFWf45A53sdfKef424&redirect_uri=http://twitterrestapi1.mybluemix.net/linkedinresponse";
		}catch (Exception e) {
			e.printStackTrace();  
		}
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "GET");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Access-Control-Max-Age", "86400");
		response.sendRedirect(authUrl);
		
		
	}

	



}