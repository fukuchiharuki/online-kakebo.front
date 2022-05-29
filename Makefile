REPOS := online-kakebo.front
SRCS := $(shell find src public -name *.ts -o -name *.tsx -o -name *.scss -o -name *.html -o -name *.ico -o -name *.png -o -name *.txt -o -name "*.json")
ARTIFACT_DIR := build
ARTIFACT := $(ARTIFACT_DIR)/index.html
TARGET_DIR := docs
TARGET := $(TARGET_DIR)/index.html
NOT_FOUND := $(TARGET_DIR)/404.html

all: $(TARGET)

$(TARGET): $(ARTIFACT)
	rm -rf $(TARGET_DIR) &&\
	cp -a $(ARTIFACT_DIR) $(TARGET_DIR) &&\
	sed -e "s/\.\//\/$(REPOS)\//g" $(TARGET) > $(NOT_FOUND)

$(ARTIFACT): $(SRCS)
	npm run build

fix: 
	npm run fix

clean:
	rm -rf $(TARGET_DIR)
	rm -rf $(ARTIFACT_DIR)

push: $(TARGET)
	git add $(TARGET_DIR) &&\
	git commit -m "deploy" &&\
	git push origin HEAD
