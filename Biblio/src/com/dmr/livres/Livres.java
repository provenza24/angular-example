package com.dmr.livres;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Livres
 */
@WebServlet("/livres")
public class Livres extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Livres() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();	
		
		String books = "[{\"id\":\"1\",\"title\":\"Central Park\",\"firstName\":\"Guillaume\",\"lastName\":\"Musso\",\"creationDate\":\"20140313T00:00:00\"},"
+"{\"id\":\"2\",\"title\":\"La fille de papier\",\"firstName\":\"Guillaume\",\"lastName\":\"Musso\",\"creationDate\":\"20140313T00:00:00\"},"
+"{\"id\":\"3\",\"title\":\"L'appel de l'ange\",\"firstName\":\"Guillaume\",\"lastName\":\"Musso\",\"creationDate\":\"20140313T00:00:00\"},"
+"{\"id\":\"4\",\"title\":\"Parce que je t'aime\",\"firstName\":\"Guillaume\",\"lastName\":\"Musso\",\"creationDate\":\"20140313T00:00:00\"},"
+"{\"id\":\"5\",\"title\":\"Le voleur de brosses à dents\",\"firstName\":\"Églantine\",\"lastName\":\"Éméyé\",\"creationDate\":\"20140313T00:00:00\"}]";		
		
		out.write(books);		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
