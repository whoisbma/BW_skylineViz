using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class deform : MonoBehaviour {
	
	//store the original posiiton of each vertex
	List<Vector3> baseVertices = new List<Vector3>();
	
	//reserve some memory for working with the vertices
	List<Vector3> workingCopy = new List<Vector3>();
	
	// Use this for initialization
	void Start () {
		baseVertices = new List<Vector3> (GetComponent<MeshFilter> ().mesh.vertices);  //get mesh data
		workingCopy = new List<Vector3> (baseVertices);
	}
	
	// Update is called once per frame
	void Update () {
		//foreach (Vector3 vertex in workingCopy) {
		for (int i = 0; i < workingCopy.Count; i ++) {
			// grab the number of the thing in the list
			//int index = workingCopy.IndexOf ( vertex );
			// apply the sine wave to the vertex
			//vertex = baseVertices[index] + Vector3.up * Mathf.Sin(Time.time + index );
			workingCopy[i] = baseVertices[i] + Vector3.up * Mathf.Sin (Time.time + i) * 0.1f;
			
		}
		GetComponent<MeshFilter> ().mesh.vertices = workingCopy.ToArray ();
		
		GetComponent<MeshCollider> ().sharedMesh = GetComponent<MeshFilter> ().mesh;
		
		GetComponent<MeshFilter> ().mesh.RecalculateNormals ();
		
		foreach (Vector3 vector in workingCopy) {
			Debug.DrawRay (transform.TransformPoint (vector), 
			               GetComponent<MeshFilter>().mesh.normals[workingCopy.IndexOf (vector)] * 50);
		}
	}
}
