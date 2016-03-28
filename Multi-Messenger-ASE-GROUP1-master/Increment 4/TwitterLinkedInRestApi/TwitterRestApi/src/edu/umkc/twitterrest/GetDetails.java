package edu.umkc.twitterrest;

import java.io.IOException;
import com.sun.jersey.api.client.ClientResponse;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.core.util.FeaturesAndProperties;
/**
 * Servlet implementation class GetDetails
 */
@WebServlet("/GetDetails")
public class GetDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetDetails() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		String accesstoken=request.getParameter("lnaccesstoken");
		String x=getMyProfile(accesstoken);
		response.getWriter().write(x);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "GET");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Access-Control-Max-Age", "86400");
	}

	public String getMyProfile(String accessToken) throws ServletException, IOException{
		System.out.println("getMyProfile::");
		//Person personInfo = new Person();
		Client client = Client.create();

		WebResource webResource = client.resource("https://api.linkedin.com/v1/people/~?format=json&oauth2_access_token=" + accessToken);
		ClientResponse resp = webResource.accept("text/html").get(ClientResponse.class);
		System.out.println("resp:::::" + resp);
		String output="";
		if (resp.getStatus() == 200) {
			output = resp.getEntity(String.class);
			/*System.out.println("inside if" + output);
			try{
				System.out.println("Inside try::");
				personInfo = new ObjectMapper().readValue(output, Person.class);
				System.out.println("personInfo::"+personInfo);

				return personInfo;

			}catch (Exception e) {
				System.out.println("Exception" + e);
			}*/

		}
		return output;


	}	
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
