package ponysresources

import "testing"

func TestCharacterCatalog(t *testing.T) {
	if CharacterCount() != 104 {
		t.Fatalf("got %d records", CharacterCount())
	}
	url, ok := CharacterURL("sera-park")
	if !ok || url != "https://ponys.ai/characters/sera-park" {
		t.Fatal("bad character URL")
	}
}
